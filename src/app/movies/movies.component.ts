import { Component, OnInit, Input } from '@angular/core';
import { FeedApiService } from '../service/feed-api.service';
import { map, shareReplay } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public moviesFeed: any = [];
  public moviesList: any = [];

  constructor(private feedService: FeedApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
  
    this.moviesList = this.feedService.getFeed().subscribe(
      (movies) => {
       return this.moviesFeed = movies.entries;
      },
      shareReplay(1)
    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    
  }
  
}

