import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoQueueService } from './shared/photo/photo-queue.service';
import { MediaItem } from './shared/photo/types';
import { Deferred } from './shared/utils/deferred';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './spinner.scss'],
})
export class AppComponent implements OnInit {
  loading = true;
  items: DataItem[] = [];
  activeItem?: DataItem;
  nextItemLoadStatus = new Deferred();
  onlineStatus = new Deferred();
  isInFullscreen = false;

  constructor(private photoQueueService: PhotoQueueService) {}

  async ngOnInit() {
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

  onImageLoad(item: DataItem) {
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

  private get windowRatio() {
    return window.innerWidth / window.innerHeight;
  }

  private getRatioType(mediaItem: MediaItem) {
    if (!mediaItem) {
      return RatioType.default;
    }
    const { width, height } = mediaItem.photo.mediaMetadata;
    const photoRatio = +width / +height;

    if (Math.abs(this.windowRatio - photoRatio) > 0.25) {
      return RatioType.contain;
    }
    return RatioType.default;
  }

  private updateRatioTypes() {
    this.items.forEach(
      (item) => (item.ratioType = this.getRatioType(item.mediaItem))
    );
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
