import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent implements OnInit {
  Movies: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;

  constructor(
    public restApi: RestApiService
  ) {
    this.apiResponse = [];
  }

  ngOnInit() {
    // Get movies list
    this.restApi.getAllMovies().subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }

  searchMovie(searchStr: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.Movies = this.apiResponse;
        return;
      }
      this.restApi.searchMovie(searchStr).subscribe((data: {
        total_results: number;
      }) => {
        this.noResult = false;
        if (data.total_results === 0) {
          this.Movies = [];
          this.noResult = true;
          return;
        }
        this.Movies = data;
      });
    }, 250);
  }
}

