import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ZeroPageComponent } from '../../../../src/app/shared/components/zero-page/zero.page.component';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CardGeneratorComponent } from '../../../../src/app/shared/components/card-generator/card.generator.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [HomeComponent, ZeroPageComponent, CardGeneratorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    LoggerModule.forRoot({ level: NgxLoggerLevel.INFO }),
  ],
  exports: [HomeComponent],
  providers: [BookmarkService],
})
export class HomeModule {}
