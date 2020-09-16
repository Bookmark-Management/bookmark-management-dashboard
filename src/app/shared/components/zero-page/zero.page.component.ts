import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zero-page',
  templateUrl: './zero.page.component.html',
  styleUrls: ['./zero.page.component.scss'],
})
export class ZeroPageComponent implements OnInit {
  @Input() message: string;
  displayMessage: string;

  ngOnInit(): void {
    this.displayMessage = this.message ? this.message : 'There is no content.';
  }
}
