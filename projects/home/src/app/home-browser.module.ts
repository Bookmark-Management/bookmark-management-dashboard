import { Injector, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';
import { HomeModule } from './home.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HomeModule, RouterModule.forRoot([])],
  bootstrap: environment.production ? [] : [HomeComponent],
})
export class HomeBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const homeElement = createCustomElement(HomeComponent, { injector: this.injector });
    customElements.define('home-element', homeElement);
  }
}
