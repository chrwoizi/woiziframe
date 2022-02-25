import { Injectable } from '@angular/core';
import { PhotoRestService } from './photo-rest.service';
import { PhotoStorageService } from './photo-storage.service';
import { Album, MediaItem, Photo, StoreItem } from './types';

@Injectable({ providedIn: 'root' })
export class PhotoStoreService {
  private storeItems: StoreItem[] = [];
  private albumsPromise?: Promise<Album[]>;

  constructor(
    private photoRestService: PhotoRestService,
    private storageService: PhotoStorageService
  ) {}

  /** Returns random media item. */
  async getMediaItem(): Promise<MediaItem | undefined> {
    await this.populateStore();

    const item = await this.getRandomItem();
    if (!item) {
      return undefined;
    }

    const photo = await this.getRandomPhoto(item);
    if (!photo) return undefined;
    return { album: item.album, photo };
  }

  /** Returns random photo and removes it from given store item. */
  private async getRandomPhoto(item: StoreItem): Promise<Photo | undefined> {
    if (!item.photos.length) {
      this.populatePhotosToStoreItem(item);
    }
    const index = this.getRandomIndex(item.photos.length - 1);
    const id = item.photos.splice(index, 1)[0];
    if (id) {
      const photos = await this.photoRestService.getPhotos([id]);

      if (photos.mediaItemResults?.length > 0) {
        return photos.mediaItemResults[0].mediaItem;
      }
    }
    return undefined;
  }

  /** Downloads all albums and populates store items with them. */
  private async populateStore() {
    if (this.albumsPromise) {
      return this.albumsPromise;
    }

    return this.reloadStore();
  }

  public async reloadStore() {
    let albums = this.storageService.getAlbums();
    if (albums) {
      // Continue immediately but update store with new albums later.
      this.albumsPromise = Promise.resolve([]);
      this.photoRestService
        .getAlbums()
        .then((_albums) => this.updateStoreWithAlbums(_albums));
    } else {
      // Wait for albums fetching.
      this.albumsPromise = this.photoRestService.getAlbums();
      albums = await this.albumsPromise;
    }
    this.updateStoreWithAlbums(albums);

    return [];
  }

  private updateStoreWithAlbums(albums?: Album[]) {
    if (!albums || albums.length === this.storeItems.length) {
      return;
    }
    if (this.albumsEqual(albums, this.storeItems)) {
      return;
    }

    this.storageService.set(this.storageService.albumsKey, albums);

    this.storeItems = albums.map((album) => ({
      id: album.id,
      album,
      photos: [],
    }));
  }

  /** Downloads photos for given {storeItem}. */
  private async populatePhotosToStoreItem(storeItem: StoreItem) {
    const photos = this.storageService.getAlbumPhotos(storeItem.id);
    if (photos) {
      storeItem.photos = photos;
      return;
    }

    // If photos are not in local storage wait for first page loading, and load the rest in background.
    await this.loadAlbumPage(storeItem);
  }

  private async loadAlbumPage(storeItem: StoreItem) {
    const result = await this.photoRestService.getAlbumPhotos(storeItem.id);
    storeItem.photos = storeItem.photos.concat(
      ...result.mediaItems.map((item) => item.id)
    );
    this.storageService.set(storeItem.id, storeItem.photos);
  }

  private async getRandomItem(): Promise<StoreItem | undefined> {
    if (!this.storeItems) {
      return undefined;
    }
    const storeItem = this.storeItems[this.getRandomIndex()];
    if (storeItem && !storeItem.photos.length) {
      await this.populatePhotosToStoreItem(storeItem);
    }
    return storeItem;
  }

  private getRandomIndex(max = this.storeItems.length - 1, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private albumsEqual(albums: Album[], storeItems: StoreItem[]) {
    if (albums?.length !== storeItems?.length) {
      return false;
    }
    if (albums.some((x) => !storeItems.find((y) => x.id === y.id))) {
      return false;
    }
    return true;
  }
}
