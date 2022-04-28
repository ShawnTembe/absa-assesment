import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: 'Home'},
];
@NgModule({
  imports: [
    [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true, relativeLinkResolution: 'legacy' } ,
      ),
    ]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
