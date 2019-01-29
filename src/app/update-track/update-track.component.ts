import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {

  public mbid1: string;
  public comment1: string;
  public tracks;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) {

  }
 ngOnInit() {
   this.mbid1 = this._route.snapshot.paramMap.get('mbid');
   this.comment1 = this._route.snapshot.paramMap.get('comment');
   console.log(this.mbid1 + '' + this.comment1);
   this.tracks = this.muzixservice.updateTrack(this.mbid1, this.comment1).subscribe(
    data => {
      this.tracks = data;
      this.router.navigate(['/myplaylist']);
    },
    error => {
      console.log('some error occured in Update Track');
      console.log(error.errorMessage);
    }
  );
 }

}
