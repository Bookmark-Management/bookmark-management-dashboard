import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { ManageGroupsModule } from './manage-groups.module';
import { ManageGroupsComponent } from './manage-groups.component';

@NgModule({
  imports: [BrowserModule, ManageGroupsModule, RouterModule.forRoot([])],
  bootstrap: environment.production ? [] : [ManageGroupsComponent],
})
export class ManageGroupsBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const manageGroupsElement = createCustomElement(ManageGroupsComponent, { injector: this.injector });
    customElements.define('manage-groups-element', manageGroupsElement);
  }
}
