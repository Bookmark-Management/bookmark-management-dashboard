import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'create-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Array<Card>;
  showCards: boolean;
  cardsLoaded: boolean;
  zeroCards: boolean;
  zeroCardMessage: string;
  searchText: string;
  currentPage: string | number;

  constructor(
    private bookmarkService: BookmarkService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.cardsLoaded = false;
    this.showCards = true;
    this.zeroCards = true;
    this.zeroCardMessage = 'There is no tiny URLs available.';
    this.cards = [];
    this.spinner.show();
    this.bookmarkService.getTinyUrlsCards().subscribe(
      (res: Card[]) => {
        this.spinner.hide();
        this.cardsLoaded = true;
        this.cards = res;
        if (this.cards.length > 0) {
          this.zeroCards = false;
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error', 'Unable to Fetch Cards');
        this.logger.error('Unable to Fetch Cards', error);
      }
    );
  }

  createTinyURL(): void {
    this.showCards = false;
  }

  showCardsPage(): void {
    this.showCards = true;
  }
}
