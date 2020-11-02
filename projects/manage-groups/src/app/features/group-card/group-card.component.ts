import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkService } from '../../../../../../src/app/shared/services/bookmark.service';
import { Card } from '../../../../../../src/app/shared/models/card';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'manage-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
})
export class GroupCardComponent implements OnInit {
  group: Card;
  showGroup: boolean;
  dropdownList: Card[];
  selectedCard: Card[];

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private logger: NGXLogger
  ) {
    this.group = new Card();
    this.group.tinyCards = [];
    this.dropdownList = [];
  }

  ngOnInit(): void {
    this.showGroup = true;
    this.getGroupDetails();
  }

  getGroupDetails(): void {
    const id = this.route.snapshot.params.id;
    this.bookmarkService.getGroupDetails(id).subscribe(
      (res: Card) => {
        this.group = res;
      },
      (error) => {
        this.toastr.error('Error', 'Unable to Fetch Group Cards');
        this.logger.error('Unable to Fetch Group Cards', error);
      }
    );
  }

  open(content): void {
    this.selectedCard = [];
    this.bookmarkService.getTinyUrlsCards().subscribe((res: any) => {
      this.dropdownList = res;
      this.modalService.open(content, { size: 'lg', backdrop: 'static', windowClass: 'popup' }).result.then(
        (result) => {
          console.log('111', result);
          // this.bookmarkService.addTinyURLToGroup(this.group.id, this.selectedCard)
          //   .subscribe((res) => {
          //     this.getGroupDetails();
          //   })
        },
        (resaon) => {}
      );
    });
  }

  showPreviousPage(): void {
    this.router.navigate(['/manage-groups']);
  }

  backToGroup(): void {
    this.showGroup = true;
    this.getGroupDetails();
  }

  createTinyURL(): void {
    this.showGroup = false;
  }
}
