import { Injectable } from '@angular/core';
import { Album, Photo } from './types';

@Injectable({ providedIn: 'root' })
export class PhotoStorageService {
  public readonly albumsKey = 'albums';

  /** Checks whether an entry with the specified key exists in the storage.  */
  public has(key: string): boolean {
    return localStorage.getItem(getKey(key)) !== null;
  }

  /** Removes the entry that is identified by the specified key. */
  public remove(key: string): void {
    localStorage.removeItem(getKey(key));
  }

  /** Clears the storage by removing all entries. */
  public clear(): void {
    localStorage.clear();
  }

  public getAlbumPhotos = (key: string): string[] | undefined =>
    this.get(key) as string[];
  public getAlbums = (): Album[] | undefined =>
    this.get(this.albumsKey) as Album[];

  /** Performs the actual retrieval of a value from storage. */
  private get(key: string): any | undefined {
    return decode(localStorage.getItem(getKey(key)));
  }

  /** Stores the provided value using specified key in the storage. */
  public set(key: string, value?: Album[] | string[]): void {
    return localStorage.setItem(getKey(key), encode(value));
  }
}

const keyPrefix = 'woiziframe_';

function getKey(key: string): string {
  return `${keyPrefix}${key}`;
}

function encode(value: any): string {
  return JSON.stringify(value);
}

function decode(value?: string | null): any {
  try {
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    return undefined;
  }
}
