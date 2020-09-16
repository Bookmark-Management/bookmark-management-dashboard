import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule],
  entryComponents: [CardsComponent],
})
export class CardsModule {}
