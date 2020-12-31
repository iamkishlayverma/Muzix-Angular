import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { DeleteTrackComponent } from './delete-track/delete-track.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { LastFmComponent } from './last-fm/last-fm.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MuzixHttpService } from './muzix-http.service';
import { FormsModule } from '@angular/forms';
import { GetAllTracksComponent } from './get-all-tracks/get-all-tracks.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SearchTrackComponent,
    SaveTrackComponent,
    SaveTrackComponent,
    DeleteTrackComponent,
    UpdateTrackComponent,
    LastFmComponent,
    HomeComponent,
    GetAllTracksComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MuzixHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
