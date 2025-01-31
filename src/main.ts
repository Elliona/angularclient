import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {routes} from './app/app-routing.module';
import {provideHttpClient} from '@angular/common/http';
import {ApiConfiguration} from './app/services/api-configuration';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: ApiConfiguration,
      useValue: {rootUrl: 'http://localhost:8080'}
    }, provideAnimationsAsync()
  ],
}).catch((err) => console.error(err));
