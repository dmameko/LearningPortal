import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressCalendarService {

  public getMockProgressData(): Observable<number[]> {
    const randomProgressData = Array.from({ length: 35 }, () => Math.floor(Math.random() * 5));
    return of(randomProgressData);
  }
}
