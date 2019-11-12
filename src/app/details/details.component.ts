import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};
  imgUrl: any = '';
  private sanitizer: any;

  constructor(
    public router: ActivatedRoute,
    public restApi: RestApiService,
    public doms: DomSanitizer
  ) {
  }

  ngOnInit() {
    return this.restApi.getMovieDetails(this.movieId).subscribe((data: {}) => {
      // this.imgUrl = this.doms.bypassSecurityTrustStyle('https://image.tmdb.org/t/p/w1400_and_h450_face/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg');
      this.MovieDetails = data;
    });
  }

  safeCss() {
    // tslint:disable-next-line:max-line-length
    return this.doms.bypassSecurityTrustStyle('--featured-image:https://image.tmdb.org/t/p/w500/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg');
  }

}
