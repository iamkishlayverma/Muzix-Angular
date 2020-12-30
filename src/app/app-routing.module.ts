import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteTrackComponent } from './delete-track/delete-track.component';
import { GetAllTracksComponent } from './get-all-tracks/get-all-tracks.component';
import { HomeComponent } from './home/home.component';
import { LastFmComponent } from './last-fm/last-fm.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { UpdateTrackComponent } from './update-track/update-track.component';

const routes: Routes = [
  { path: 'search', component: SearchTrackComponent },
  { path: 'searchtrack/:trackname', component: LastFmComponent },
  { path: 'savetrack/:mbid', component: SaveTrackComponent },
  { path: 'myplaylist', component: GetAllTracksComponent },
  { path: 'deletetrack/:mbid', component: DeleteTrackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'updatetrack/:mbid/:comment', component: UpdateTrackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
