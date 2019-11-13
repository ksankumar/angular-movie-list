import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// HttpClient module for RESTful API
import {HttpClientModule} from '@angular/common/http';

// Routing module for router service
import {AppRoutingModule} from './app-routing.module';

// Components
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TrailerComponent} from './trailer/trailer.component';

import {DateFormat} from './shared/custom.pipe';
import {
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    DateFormat,
    TrailerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [
    TrailerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
