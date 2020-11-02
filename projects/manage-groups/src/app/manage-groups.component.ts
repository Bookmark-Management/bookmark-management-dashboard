import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    this.zeroCardMessage = 'There is no groups created yet';
    this.getGroupCards();
  }

  getGroupCards(): void {
    this.cards = [];
    this.spinner.show();
    this.bookmarkService.getGroupCards().subscribe(
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
        this.toastr.error('Error', 'Unable to Fetch Group Cards');
        this.logger.error('Unable to Fetch Group Cards', error);
      }
    );
  }

  createGroup(): void {
    this.showCards = false;
  }

  showGroupsPage(): void {
    this.showCards = true;
    this.getGroupCards();
  }
}
