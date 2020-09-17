import { Injector, NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';
import { CardsModule } from './cards.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, CardsModule, RouterModule.forRoot([])],
  bootstrap: environment.production ? [] : [CardsComponent],
})
export class CardsBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const cardsElement = createCustomElement(CardsComponent, { injector: this.injector });
    customElements.define('cards-element', cardsElement);
  }
}
