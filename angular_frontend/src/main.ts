import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

(window as any).global = window;
(window as any).global = window;
(window as any).global = window;
(window as any).process = window;
(window as any).Buffer = window;
(window as any).process.browser = true;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err =>{
    (window as any).global = window;
    (window as any).global = window;
  (window as any).global = window;
  (window as any).process = window;
  (window as any).Buffer = window;
  (window as any).process.browser = true;
    console.log(err)
  } );
