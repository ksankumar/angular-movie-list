import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TrailerComponent} from '../trailer/trailer.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};
  innerWidth: any;

  constructor(
    public router: ActivatedRoute,
    public restApi: RestApiService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    return this.restApi.getMovieDetails(this.movieId).subscribe((data: {}) => {
      this.MovieDetails = data;
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const relativeWidth = this.innerWidth > 1500 ? (1500 * 80) / 100 : (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    const relativeHeight = (relativeWidth * 9) / 16; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';
    this.restApi.getMovieTrailer(this.movieId).subscribe((data: {
      results: any;
    }) => {
      dialogConfig.data = {
        url: data.results[0].key
      };
      this.dialog.open(TrailerComponent, dialogConfig);
    });
  }
}
