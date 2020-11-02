import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BookmarkService } from '../../../../../../src/app/shared/services/bookmark.service';
import { Card } from '../../../../../../src/app/shared/models/card';
import { ToastrService } from 'ngx-toastr';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'manage-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
  @Output() backToList = new EventEmitter<any>();

  groupCard: Card;
  dropdownList = [];
  selectedItems: string[] = [];
  isSubmitting: boolean;

  @ViewChild('uploadImageLabel') uploadImageLabel: ElementRef;
  @ViewChild('uploadLogoLabel') uploadLogoLabel: ElementRef;

  constructor(private bookmarkService: BookmarkService, private toastr: ToastrService, private logger: NGXLogger) {
    this.groupCard = new Card();
    this.groupCard.tinyCards = [];
  }

  ngOnInit(): void {
    this.isSubmitting = false;
    this.bookmarkService.getTinyUrlsCards().subscribe((res: any) => {
      this.dropdownList = res;
    });
  }

  changeImageFile(event): void {
    this.uploadImageLabel.nativeElement.innerHTML = event.target.files[0].name;
  }

  changeLogoFile(event): void {
    this.uploadLogoLabel.nativeElement.innerHTML = event.target.files[0].name;
  }

  onItemSelect(item: any): void {
    console.log(item);
  }

  onSelectAll(items: any): void {
    console.log(items);
  }

  onCreateCard(card): void {
    card.createdDate = new Date();
    card.createdBy = 'Pratik Kumar';
    card.groupName = card.title;
    let tinyCards = [];
    card.tinyCards.forEach((id) => {
      let td = [];
      td = this.dropdownList.filter((c) => c.id === id);
      tinyCards = tinyCards.length > 0 ? tinyCards.concat(td) : td;
    });
    card.tinyCards = tinyCards;
    this.isSubmitting = true;
    this.bookmarkService.createGroupCard(card).subscribe(
      (res: any) => {
        this.isSubmitting = false;
      },
      (error) => {
        this.isSubmitting = false;
        this.toastr.error('Error', 'Unable to create Group Cards');
        this.logger.error('Unable to create Group Cards', error);
      }
    );
  }
}
