import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuzixHttpService {

  public lastfmUrl = 'http://ws.audioscrobbler.com/2.0';
  public apiKey = '01887f43a08fb7bf4dc2e293b5e2c5b9';

  // public mongodbUrl = 'http://localhost:8090/api/v2/';
  public tracks;

  constructor(private httpclient: HttpClient) { }

  public searchTrack(track): Observable<JSON> {
    console.log('this.tracks', (this.lastfmUrl + '/?method=track.search&track=' + track +
    '&api_key=' + this.apiKey + '&format=json'));
    this.tracks = this.httpclient.get<JSON>(this.lastfmUrl + '/?method=track.search&track=' + track +
     '&api_key=' + this.apiKey + '&format=json');    
    return this.tracks;
  }

  public saveTrack(trackinfo): any {
    const track = "str";
    // const saveTrack = this.httpclient.post(this.mongodbUrl + 'track', trackinfo);
    return track;
  }

  public findtrack(mid): any {
    const trackinfo = this.httpclient.get(this.lastfmUrl + '/?method=track.getInfo&api_key=' + this.apiKey + '&mbid=' +
    mid + '&format=json');
    return trackinfo;
  }

  public getAllTracks(): any {
    const track = "str";
    // const tracks = this.httpclient.get(this.mongodbUrl + 'tracks');
    return track;
  }

  public deleteTrack(mid): any {
    console.log('HERE : ' + mid);
    const track = "str";
    // const track = this.httpclient.delete(this.mongodbUrl + 'track/' + mid);
    return track;
  }

  public updateTrack(mid, comment): any {
    console.log('Id : ' + mid + 'Comment : ' + comment);
    const track = "str";
    // const track = this.httpclient.put(this.mongodbUrl + 'track/' + mid, comment);
    return track;
  }
}
