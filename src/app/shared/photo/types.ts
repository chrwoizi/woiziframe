export interface Album {
  id: string;
  title: string;
}

export interface MediaMetadata {
  width: string;
  height: string;
}

export interface PhotosResponse {
  mediaItems: Photo[];
}

export interface BatchPhotosResponse {
  mediaItemResults: { mediaItem: Photo }[];
}

export interface Photo {
  baseUrl: string;
  id: string;
  mediaMetadata: MediaMetadata;
}

export interface StoreItem {
  id: string;
  photos: string[];
  album: Album;
}

export interface MediaItem {
  album: Album;
  photo: Photo;
}
