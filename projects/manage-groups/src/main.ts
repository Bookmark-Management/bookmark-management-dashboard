import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { ManageGroupsBrowserModule } from './app/manage-groups-browser.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(ManageGroupsBrowserModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom,
  })
  .catch((err) => console.error(err));
