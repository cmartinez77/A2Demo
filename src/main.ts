import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


/******imports******/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';   // JIT
// import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';  // AOT





if (environment.production) {
  enableProdMode();
}

/* Just in time (JIT) compiler
*   -compiles application dynamically in the browser
*   */
platformBrowserDynamic().bootstrapModule(AppModule);


/* Ahead of time (AOT)
 *   -Generates module factory(AppModuleNgFactory
 *   -Need to install additional npm dependencies
 *   */
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
