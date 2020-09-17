import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'create-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  urlInfo: Card;

  @Input()
  isGroup: boolean;

  otherImage: string;

  constructor(private router: Router) {
    this.urlInfo = new Card();
  }

  ngOnInit(): void {}

  showDeletePromptMessage(): void {}

  cardNavigation(card): void {
    if (this.isGroup) {
      this.router.navigate([`/group/${card.id}`]);
    }
  }
}
