import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkDirection } from '../../../../shared/directions/WorkDirection';

@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  constructor(private http: HttpClient) {}

  async get(): Promise<WorkDirection[]> {
    return await this.http.get<WorkDirection[]>(`/api/directions`).toPromise();
  }
}
