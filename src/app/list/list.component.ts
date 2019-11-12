import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  Movies: any = [];

  constructor(
    public restApi: RestApiService
  ) {
  }

  ngOnInit() {
    // Get movies list
    return this.restApi.getAllMovies().subscribe((data: {}) => {
      this.Movies = data;
    });
  }
}

