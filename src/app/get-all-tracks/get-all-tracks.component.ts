import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-get-all-tracks',
  templateUrl: './get-all-tracks.component.html',
  styleUrls: ['./get-all-tracks.component.css']
})
export class GetAllTracksComponent implements OnInit, OnChanges {
  public tracks;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  public artist: string;
  public mbid1: string;
  public track: string;

  public trackinfo = {
    id : this.mbid1,
    name: this.track,
    comment : this.artist,
  };
  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    if (this.mbid1 != null) {
      this.muzixservice.findtrack(this.mbid1).subscribe(
        (data) => {
          this.trackinfo.id = this.mbid1;
          console.log(this.trackinfo);
          this.muzixservice.deleteTrack(this.trackinfo.id).subscribe();
    });
    }
    this.muzixservice.getAllTracks().subscribe((data) => this.tracks = data);
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes : ' + changes);
  }
}
