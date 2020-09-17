import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';

@Component({
  selector: 'manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss'],
})
export class ManageGroupsComponent implements OnInit {
  cards: Array<Card>;
  showCards: boolean;
  cardsLoaded: boolean;
  zeroCards: boolean;
  zeroCardMessage: string;
  searchText: any;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.cardsLoaded = false;
    this.showCards = true;
    this.zeroCards = true;
    this.zeroCardMessage = 'There is no bookmarked added';
    this.cards = [];

    this.bookmarkService.getGroupCards().subscribe((res: Card[]) => {
      this.cardsLoaded = true;
      this.cards = res;
      if (this.cards.length > 0) {
        this.zeroCards = false;
      }
    });
  }

  createGroup(): void {
    this.showCards = false;
  }

  showGroupsPage(): void {
    this.showCards = true;
  }
}
