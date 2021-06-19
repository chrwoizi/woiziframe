import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calendar } from '../../../../shared/Calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  async get(): Promise<Calendar> {
    return await this.http.get<Calendar>(`/api/calendar`).toPromise();
  }

  async getAuthUrl(): Promise<string> {
    return await this.http.get<string>(`/api/calendar/auth`).toPromise();
  }

  async setAuthCode(code: string): Promise<void> {
    await this.http.post(`/api/calendar/auth`, { code }).toPromise();
  }
}
