import { Component, OnInit, Input } from '@angular/core';
import { FeedApiService } from '../service/feed-api.service';
import { map, take, tap, shareReplay } from 'rxjs/operators';
import { MoviesComponent } from '../movies/movies.component';
import { Observable } from 'rxjs/internal/Observable';
import { MoviesAndSeriesFeed, Entries } from '../models/movies-and-series-feed';
import { VirtualTimeScheduler } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  public seriesAndMovies$: Observable<Entries[]>;
  public serieslist: any;
  public seriesFeed: any;

  constructor(private feedService: FeedApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    
    this.serieslist = this.feedService.getFeed().subscribe(
      (series) => {
        return this.seriesFeed = series.entries;
      },
      shareReplay(1),
    );
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
  

}
