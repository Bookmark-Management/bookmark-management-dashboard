import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
