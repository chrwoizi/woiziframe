import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoQueueService } from './shared/photo/photo-queue.service';
import { MediaItem } from './shared/photo/types';
import { Deferred } from './shared/utils/deferred';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './spinner.scss'],
})
export class AppComponent implements AfterViewInit {
  loading = true;
  items: DataItem[] = [];
  activeItem?: DataItem;
  nextItemLoadStatus = new Deferred();
  onlineStatus = new Deferred();
  isInFullscreen = false;
  @ViewChild('page') page!: ElementRef;

  constructor(private photoQueueService: PhotoQueueService) {}

  async ngAfterViewInit() {
    this.onlineStatus.resolve();
    localStorage.clear();
    this.initPhotoQueue();
  }

  private async initPhotoQueue() {
    await this.photoQueueService.initQueue();

    const item1 = this.getNewPhoto();
    const item2 = this.getNewPhoto();
    const items = [];
    if (item1) items.push(item1);
    if (item2) items.push(item2);
    this.items = items;
    this.activeItem = this.items[0];
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
    await this.onlineStatus.promise;
    if (this.activeItem === item) {
      this.nextItem();
    } else {
      const item = this.getNewPhoto();
      if (item) {
        this.items = [this.items[0], item];
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

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  private async nextItem() {
    await this.onlineStatus.promise;
    await this.nextItemLoadStatus.promise;
    this.activeItem = this.items[1];
    setTimeout(() => {
      const item = this.getNewPhoto();
      if (item) {
        this.items = [this.items[1], item];
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
    this.items.forEach((item) => this.updateRatioType(item));
  }

  @HostListener('window:resize')
  private onResize() {
    this.updateRatioTypes();
  }

  @HostListener('document:fullscreenchange')
  private onFullscreenchange() {
    this.isInFullscreen = !!document.fullscreenElement;
  }

  @HostListener('window:offline')
  private onOffline() {
    this.onlineStatus = new Deferred();
  }

  @HostListener('window:online')
  private onOnline() {
    this.onlineStatus.resolve();
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
