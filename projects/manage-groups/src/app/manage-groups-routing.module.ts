import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCardComponent } from './features/group-card/group-card.component';
import { ManageGroupsComponent } from './manage-groups.component';

const routes: Routes = [
  { path: '', component: ManageGroupsComponent },
  { path: ':id', component: GroupCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGroupsRoutingModule {}
