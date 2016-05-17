import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2BoilerplateRouterAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}
enableProdMode();

bootstrap(Ng2BoilerplateRouterAppComponent);
