import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home.module';
import { Card } from '../../../../src/app/shared/models/card';
import { of, throwError } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { LoggerTestingModule, NGXLoggerMock } from 'ngx-logger/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let bookmarkService: BookmarkService;
  let logger: NGXLoggerMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HomeModule, LoggerTestingModule, BrowserAnimationsModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    bookmarkService = fixture.debugElement.injector.get(BookmarkService);
    logger = fixture.debugElement.injector.get(NGXLogger);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show cards when click on *Go Back* button', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    component.showCardsPage();
    expect(component.showCards).toBeTrue();
  });

  it('should show create tiny url page when click on *Create new tiny URL* button', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    component.createTinyURL();
    expect(component.showCards).toBeFalse();
  });

  it('should have requested to get cards from RESTful api', () => {
    // Given
    const cards: Card[] = require('../../../../mocks/data.json').cards;
    spyOn(bookmarkService, 'getTinyUrlsCards').and.returnValues(of(cards));
    // When
    fixture.detectChanges();
    // Then
    expect(bookmarkService.getTinyUrlsCards).toHaveBeenCalledTimes(1);
    expect(component.cards).toBeDefined();
    expect(component.zeroCards).toBeFalse();
    expect(JSON.stringify(component.cards)).toEqual(JSON.stringify(cards));
  });

  it('should display zero card page when zero cards fetched from RESTful api', () => {
    // Given
    const zeroCards: Card[] = require('../../../../mocks/data.json')['zero-cards'];
    spyOn(bookmarkService, 'getTinyUrlsCards').and.returnValues(of(zeroCards));
    // When
    fixture.detectChanges();
    // Then
    expect(bookmarkService.getTinyUrlsCards).toHaveBeenCalledTimes(1);
    expect(component.cards).toBeDefined();
    expect(component.showCards).toBeTrue();
    expect(component.cardsLoaded).toBeTrue();
    expect(component.zeroCards).toBeTrue();
    expect(JSON.stringify(component.cards)).toEqual(JSON.stringify(zeroCards));
  });

  it('should log errors when get cards from RESTful api request fails', () => {
    const error = new Error('Unable to Fetch Cards');
    spyOn(bookmarkService, 'getTinyUrlsCards').and.returnValue(throwError(error));
    spyOn(logger, 'error').and.callThrough();
    fixture.detectChanges();
    expect(bookmarkService.getTinyUrlsCards).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith('Unable to Fetch Cards', error);
  });
});
