import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, BatchPhotosResponse, Photo, PhotosResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class PhotoRestService {
  constructor(private http: HttpClient) {}

  async getAlbums(): Promise<Album[]> {
    const files = await this.http.get<string[]>('/api/albums').toPromise();
    return files.map(
      (x) =>
        ({
          id: x,
          title: x,
        } as Album)
    );
  }

  async getAlbumPhotos(albumId: string): Promise<PhotosResponse> {
    const files = await this.http
      .get<string[]>('/api/files?album=' + albumId)
      .toPromise();
    return {
      mediaItems: files.map((x) => this.createPhotoFromFilename(x)),
    } as PhotosResponse;
  }

  async getPhotos(ids: string[]): Promise<BatchPhotosResponse> {
    return {
      mediaItemResults: ids.map((x) => ({
        mediaItem: this.createPhotoFromFilename(x),
      })),
    } as BatchPhotosResponse;
  }

  private createPhotoFromFilename(x: string): Photo {
    return {
      baseUrl: '/api/file/' + x,
      id: x,
      mediaMetadata: {
        width: undefined,
        height: undefined,
      },
    };
  }
}
