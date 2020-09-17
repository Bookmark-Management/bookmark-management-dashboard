import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupsComponent } from './manage-groups.component';
import { ManageGroupsRoutingModule } from './manage-groups-routing.module';

@NgModule({
  declarations: [ManageGroupsComponent],
  imports: [CommonModule, ManageGroupsRoutingModule],
  exports: [ManageGroupsComponent],
})
export class ManageGroupsModule {}
