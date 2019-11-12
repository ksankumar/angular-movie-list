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
// import {RestApiService} from './shared/rest-api.service';
import {MatListModule} from '@angular/material/list';
import { DateFormat } from './shared/custom.pipe';
import {MatCardModule, MatGridListModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    DateFormat
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
