import { Injectable } from '@angular/core';
import { PhotoStoreService } from './photo-store.service';
import { MediaItem } from './types';

@Injectable({ providedIn: 'root' })
export class PhotoQueueService {
  queueSize = 2;
  items: MediaItem[] = [];

  constructor(private photoStoreService: PhotoStoreService) {}

  async initQueue() {
    const items = [];
    for (let i = 0; i < this.queueSize; ++i) {
      const mediaItem = await this.photoStoreService.getMediaItem();
      if (mediaItem) {
        items.push(mediaItem);
      }
    }
    this.items = items;
  }

  getPhoto(): MediaItem | undefined {
    // TODO: this method might be async since it's possible to get all the element before it loads new one.
    this.addPhoto();
    if (!this.isEmpty()) {
      return this.items?.shift();
    }
    return undefined;
  }

  async addPhoto() {
    const photo = await this.photoStoreService.getMediaItem();
    if (photo) {
      this.items.push(photo);
    }
  }

  private isEmpty(): boolean {
    return !this.items.length;
  }
}
