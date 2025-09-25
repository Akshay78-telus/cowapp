import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserAnimationsModule, 
    ),
    providePrimeNG({
      theme: { preset: Aura },
      ripple: true,
      inputStyle: 'outlined'
    }),
  ],
};
