import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calendar } from '../../../../shared/calendar/Calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  async get(): Promise<Calendar> {
    return await this.http.get<Calendar>(`/api/calendar`).toPromise();
  }
}
