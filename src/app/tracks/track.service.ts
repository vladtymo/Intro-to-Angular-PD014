import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITrack } from './track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private contollerRoute: string;

  constructor(private httpClient: HttpClient) {
    this.contollerRoute = environment.apiUrl + 'tracks/';
  }

  getAllTracks(): Observable<ITrack[]> {
    return this.httpClient.get<ITrack[]>(this.contollerRoute);
  }
}
