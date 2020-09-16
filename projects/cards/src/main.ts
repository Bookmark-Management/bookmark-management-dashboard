import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { CardsModule } from './app/cards.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(CardsModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom,
  })
  .catch((err) => console.error(err));
