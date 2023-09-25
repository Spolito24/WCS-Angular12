import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiKey = 'YT9xa5C1nQPOmUdrl0AyXTTdL91USTRmBpR8BMaD';

  constructor(public http: HttpClient) {}

  public getImageOfTheDay(): Observable<[]> {
    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get<[]>('https://api.nasa.gov/planetary/apod', { params });
  }
}
