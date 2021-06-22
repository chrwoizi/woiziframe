import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GarbageDisposal } from '../../../../shared/GarbageDisposal';

@Injectable({
  providedIn: 'root',
})
export class GarbageService {
  constructor(private http: HttpClient) {}

  async get(): Promise<GarbageDisposal> {
    return await this.http.get<GarbageDisposal>(`/api/garbage`).toPromise();
  }
}
