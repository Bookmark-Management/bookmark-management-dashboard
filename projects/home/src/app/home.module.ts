import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ZeroPageComponent } from '../../../../src/app/shared/components/zero-page/zero.page.component';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, ZeroPageComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, HttpClientModule],
  exports: [HomeComponent],
  providers: [BookmarkService],
})
export class HomeModule {}
