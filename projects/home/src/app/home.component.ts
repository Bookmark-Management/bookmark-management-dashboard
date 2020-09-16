import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';

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

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.cardsLoaded = false;
    this.showCards = true;
    this.zeroCards = true;
    this.zeroCardMessage = 'There is no tiny URLs available.';
    this.cards = [];
    this.bookmarkService.getTinyUrlsCards().subscribe((res: Card[]) => {
      this.cardsLoaded = true;
      this.cards = res;
      if (this.cards.length > 0) {
        this.zeroCards = false;
      }
    });
  }

  createTinyURL(): void {
    this.showCards = false;
  }

  showCardsPage(): void {
    this.showCards = true;
  }
}
