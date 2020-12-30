import { MuzixHttpService } from './../muzix-http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-fm',
  templateUrl: './last-fm.component.html',
  styleUrls: ['./last-fm.component.css']
})
export class LastFmComponent implements OnInit {

  public tracks;
  public trackname;
  public searching;
  constructor(public _route: ActivatedRoute , private router: Router , public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.searching = true;
    this.trackname = this._route.snapshot.paramMap.get('trackname');
    console.log('IN LAST FM :' + this.trackname);

    this.tracks = this.muzixservice.searchTrack(this.trackname).subscribe(
      data => {
        this.tracks = data;
        this.searching = false;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
  }

}
