import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes, withHashLocation()), // Enabled HashLocationStrategy
    provideAnimations(),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
