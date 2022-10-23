import { Component, OnInit } from '@angular/core';
import { ITrack } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: ITrack[] = [];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks().subscribe(result => {
      this.tracks = result;
    }, 
    error => {
      console.log(error);
    });
  }

}
