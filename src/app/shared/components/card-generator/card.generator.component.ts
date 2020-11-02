import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Card } from '../../models/card';
import { TinyUrl } from '../../models/tinyUrl';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NGXLogger } from 'ngx-logger';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card.generator.component.html',
  styleUrls: ['./card.generator.component.scss'],
})
export class CardGeneratorComponent implements OnInit {
  @Output() backToList = new EventEmitter<any>();
  tinyUrlRequest = new TinyUrl();
  tinyUrl: string;
  card = new Card();
  step: number;
  isSubmitting: boolean;

  @ViewChild('uploadImageLabel') uploadImageLabel: ElementRef;
  @ViewChild('uploadLogoLabel') uploadLogoLabel: ElementRef;

  constructor(
    private bookmarkService: BookmarkService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.isSubmitting = false;
    this.step = 1;
  }

  onGenerateURL(form): void {
    this.isSubmitting = true;
    this.spinner.show();
    this.bookmarkService.generateTinyUrl(form.value).subscribe(
      (res: TinyUrl) => {
        this.spinner.hide();
        this.tinyUrl = res.tinyUrl ? `${this.baseService.getBaseUrl()}` + res.tinyUrl : form.value.longurl;
        this.isSubmitting = false;
        this.step = 2;
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error', 'Unable to Generate Tiny Url');
        this.logger.error('Unable to Generate Tiny Url', error);
      }
    );
  }

  onSkip(): void {
    this.backToList.emit(true);
  }

  changeImageFile(event): void {
    this.uploadImageLabel.nativeElement.innerHTML = event.target.files[0].name;
  }

  changeLogoFile(event): void {
    this.uploadLogoLabel.nativeElement.innerHTML = event.target.files[0].name;
  }

  onSubmit(form): void {
    this.logger.info('Creating card with info: ', form);
    form.value.createdBy = 'Pratik Kumar';
    form.value.createdDate = new Date();
    this.bookmarkService.createTinyURLCard(form.value).subscribe(
      (res: TinyUrl) => {
        this.spinner.hide();
        this.isSubmitting = false;
        this.backToList.emit(true);
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error', 'Unable to Generate Tiny Url');
        this.logger.error('Unable to Generate Tiny Url', error);
      }
    );
    // this.backToList.emit(true);
  }
}
