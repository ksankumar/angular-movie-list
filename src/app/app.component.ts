import {Component} from '@angular/core';
import {fadeAnimation} from './routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'angular-movie-list';
}
