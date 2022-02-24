import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoQueueService } from '../photo/photo-queue.service';
import { MediaItem } from '../photo/types';
import { Deferred } from '../utils/deferred';
import { PhotoStoreService } from './photo-store.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss', '../spinner.scss'],
})
export class PhotoComponent implements AfterViewInit, OnInit, OnDestroy {
  loading = true;
  item1?: DataItem;
  item2?: DataItem;
  activeItem?: DataItem;
  nextItemLoadStatus = new Deferred();
  private refreshInterval?: any;
  @ViewChild('page') page!: ElementRef;

  constructor(
    private photoQueueService: PhotoQueueService,
    private photoStoreService: PhotoStoreService
  ) {}

  async ngAfterViewInit() {
    localStorage.clear();
    this.initPhotoQueue();
  }

  ngOnInit() {
    this.refreshInterval = setInterval(
      () => this.photoStoreService.reloadStore(),
      environment.garbageRefreshIntervalMinutes * 60 * 1000
    );
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  private async initPhotoQueue() {
    await this.photoQueueService.initQueue();

    this.item1 = this.getNewPhoto();
    this.item2 = this.getNewPhoto();
    this.activeItem = this.item1;
    this.loading = false;

    // TODO: check aspect ratio of photos and render it accordingly (animation for panorama, blurred background for vertical photos).
    setTimeout(() => this.nextItem(), environment.interval);
  }

  onImageLoad(item: DataItem, image: HTMLImageElement) {
    item.mediaItem.photo.mediaMetadata.width = image.naturalWidth.toString();
    item.mediaItem.photo.mediaMetadata.height = image.naturalHeight.toString();
    this.updateRatioType(item);

    if (this.activeItem !== item) {
      this.nextItemLoadStatus.resolve();
    }
  }

  async onImageError(item: DataItem) {
    if (this.activeItem === item) {
      this.nextItem();
    } else {
      const item = this.getNewPhoto();
      if (item) {
        if (this.activeItem === this.item1) {
          this.item2 = item;
        } else {
          this.item1 = item;
        }
      }
    }
  }

  isContainType = (item: DataItem): boolean =>
    item.ratioType === RatioType.contain;

  getPhotoRatio(mediaItem: MediaItem) {
    if (!mediaItem) {
      return RatioType.default;
    }

    const { width, height } = mediaItem.photo.mediaMetadata;
    if (typeof width === 'undefined' || typeof height === 'undefined') {
      return undefined;
    }

    return +width / +height;
  }

  getImageLeft(item: DataItem): number | undefined {
    if (item.ratioType !== RatioType.contain) {
      return undefined;
    }

    const photoRatio = this.getPhotoRatio(item.mediaItem);
    if (photoRatio && photoRatio >= 1) {
      // landscape
      return -(100 * environment.maxCrop) / 2;
    }
    return undefined;
  }

  getImageTop(item: DataItem): number | undefined {
    if (item.ratioType !== RatioType.contain) {
      return undefined;
    }

    const photoRatio = this.getPhotoRatio(item.mediaItem);
    if (photoRatio && photoRatio < 1) {
      // portrait
      return -(100 * environment.maxCrop) / 2;
    }
    return undefined;
  }

  getImageWidth(item: DataItem): number | undefined {
    if (item.ratioType !== RatioType.contain) {
      return undefined;
    }

    const photoRatio = this.getPhotoRatio(item.mediaItem);
    if (photoRatio && photoRatio >= 1) {
      // landscape
      return 100 + environment.maxCrop * 100;
    }
    return undefined;
  }

  getImageHeight(item: DataItem): number | undefined {
    if (item.ratioType !== RatioType.contain) {
      return undefined;
    }

    const photoRatio = this.getPhotoRatio(item.mediaItem);
    if (photoRatio && photoRatio < 1) {
      // portrait
      return 100 + environment.maxCrop * 100;
    }
    return undefined;
  }

  private async nextItem() {
    await this.nextItemLoadStatus.promise;

    if (this.activeItem === this.item1) {
      this.activeItem = this.item2;
    } else {
      this.activeItem = this.item1;
    }

    setTimeout(() => {
      const item = this.getNewPhoto();
      if (item) {
        if (this.activeItem === this.item1) {
          this.item2 = item;
        } else {
          this.item1 = item;
        }
      }
      this.nextItemLoadStatus = new Deferred();
      setTimeout(() => this.nextItem(), environment.interval);
    }, 900);
  }

  private getNewPhoto(): DataItem | undefined {
    return this.dataItem(this.photoQueueService.getPhoto());
  }

  private dataItem = (mediaItem?: MediaItem): DataItem | undefined =>
    mediaItem && {
      mediaItem,
      photoUrl: this.photoUrl(mediaItem),
      ratioType: this.getRatioType(mediaItem),
    };

  private photoUrl(mediaItem: MediaItem): string | undefined {
    if (!mediaItem) {
      return undefined;
    }
    const { photo } = mediaItem;
    return photo.baseUrl;
  }

  private getRatioType(mediaItem: MediaItem) {
    const photoRatio = this.getPhotoRatio(mediaItem);
    if (!photoRatio) {
      return RatioType.default;
    }

    const page = this.page.nativeElement as HTMLDivElement;
    const pageHeight = page.offsetHeight;
    const pageWidth = page.offsetWidth;

    let crop;
    if (photoRatio >= 1) {
      // landscape
      const scaledWidth = pageHeight * photoRatio;
      crop = scaledWidth / pageWidth - 1;
    } else {
      // portrait
      const scaledHeight = pageWidth / photoRatio;
      crop = scaledHeight / pageHeight - 1;
    }

    if (crop > environment.maxCrop) {
      return RatioType.contain;
    }

    return RatioType.default;
  }

  private updateRatioType(item: DataItem) {
    item.ratioType = this.getRatioType(item.mediaItem);
  }

  private updateRatioTypes() {
    if (this.item1) this.updateRatioType(this.item1);
    if (this.item2) this.updateRatioType(this.item2);
  }

  @HostListener('window:resize')
  private onResize() {
    this.updateRatioTypes();
  }
}

enum RatioType {
  default,
  contain,
  panorama,
}

interface DataItem {
  mediaItem: MediaItem;
  photoUrl?: string;
  ratioType: RatioType;
  loaded?: boolean;
}
