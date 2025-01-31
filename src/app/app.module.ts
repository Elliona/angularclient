import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ApiModule} from './services/api.module';
import {BookViewComponent} from './component/view/book/book-view.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [AppComponent, BookViewComponent
  ],
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:8080'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
