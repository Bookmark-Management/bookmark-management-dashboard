import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';

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

  constructor() {}

  ngOnInit(): void {
    this.cardsLoaded = false;
    this.showCards = true;
    this.zeroCards = true;
    this.zeroCardMessage = 'There is no tiny URLs available.';
    this.cards = [];
  }

  createTinyURL(): void {
    this.showCards = false;
  }

  showCardsPage(): void {
    this.showCards = true;
  }
}
