import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(private http: HttpClient) {}

  async isScreenOn(): Promise<boolean> {
    if (environment.screenStatusUrl) {
      try {
        const response = await this.http
          .get<{ on: boolean }>(environment.screenStatusUrl)
          .toPromise();
        return response.on;
      } catch (e) {
        console.error(e);
        return true;
      }
    }
    return true;
  }
}
