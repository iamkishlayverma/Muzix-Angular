import { MuzixHttpService } from './../muzix-http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-fm',
  templateUrl: './last-fm.component.html',
  styleUrls: ['./last-fm.component.css']
})
export class LastFmComponent implements OnInit {

  public tracks: any;
  public trackname: any;
  public searching: any;
  public songs: any;

  constructor(
    public _route: ActivatedRoute,
    private router: Router,
    public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.searching = true;
    this.trackname = this._route.snapshot.paramMap.get('trackname');
    this.tracks = this.muzixservice.searchTrack(this.trackname).subscribe(
      data => {
        this.tracks = data;
        this.songs = this.tracks.results.trackmatches.track
        this.searching = false;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
}
