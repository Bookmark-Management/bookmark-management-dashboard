import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../src/app/shared/models/card';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() urlInfo: Card;
  @Input() groupCard: boolean;

  @Input() isGroup: boolean;

  otherImage: string;

  constructor(private router: Router, private modalService: NgbModal) {
    this.urlInfo = new Card();
  }

  ngOnInit(): void {}

  open(content): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        console.log(result);
        if (this.isGroup) {
          // this.bookmarkService.deleteCardFromGroup()
          // .subscribe((res) => {
          //   this.router.navigate([`/group/${this.urlInfo.id}`])
          // })
        } else {
        }
      },
      (reason) => {
        console.log('dismiss');
      }
    );
  }

  cardNavigation(card): void {
    if (this.isGroup) {
      this.router.navigate([`/manage-groups/${card.id}`]);
    }
  }
}
