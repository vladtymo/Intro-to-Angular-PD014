import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrack } from './track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private apiUrl: string = "https://localhost:7076/api/";
  
  constructor(private httpClient: HttpClient) { }

  getAllTracks(): Observable<ITrack[]> {
    return this.httpClient.get<ITrack[]>(this.apiUrl + 'tracks');
  }
}
