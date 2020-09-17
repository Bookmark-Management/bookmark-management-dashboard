import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BookmarkService } from '../../../../../../src/app/shared/services/bookmark.service';
import { Card } from '../../../../../../src/app/shared/models/card';

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

  constructor(private bookmarkService: BookmarkService) {
    this.groupCard = new Card();
    this.groupCard.tinyCards = [];
  }

  ngOnInit(): void {
    this.isSubmitting = false;
    this.bookmarkService.getTinyUrlsCards().subscribe((res: any) => {
      this.dropdownList = res;
      console.log(this.dropdownList);
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
    console.log(card);
    this.isSubmitting = true;
    this.bookmarkService.createGroupCard(card.value);
  }
}
