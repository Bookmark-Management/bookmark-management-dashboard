import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupsComponent } from './manage-groups.component';
import { ManageGroupsRoutingModule } from './manage-groups-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../../../home/src/app/home.module';
import { ToastrModule } from 'ngx-toastr';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardsModule } from '../../../cards/src/app/cards.module';
import { CustomPipeModule } from '../../../../src/app/shared/pipes/pipe.module';

@NgModule({
  declarations: [ManageGroupsComponent],
  imports: [
    CommonModule,
    ManageGroupsRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    LoggerModule.forRoot({ level: NgxLoggerLevel.INFO }),
    NgxPaginationModule,
    CardsModule,
    CustomPipeModule.forRoot(),
  ],
  exports: [ManageGroupsComponent],
  providers: [BookmarkService],
})
export class ManageGroupsModule {}
