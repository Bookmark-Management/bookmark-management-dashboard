import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupsComponent } from './manage-groups.component';
import { Card } from '../../../../src/app/shared/models/card';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { ManageGroupsModule } from './manage-groups.module';

describe('ManageGroupsComponent', () => {
  let component: ManageGroupsComponent;
  let fixture: ComponentFixture<ManageGroupsComponent>;
  let bookmarkService: BookmarkService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ManageGroupsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupsComponent);
    component = fixture.componentInstance;
    bookmarkService = fixture.debugElement.injector.get(BookmarkService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show group cards when click on *Go Back* button', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    component.showGroupsPage();
    expect(component.showCards).toBeTrue();
  });

  it('should show create group page when click on *Create new group* button', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    component.createGroup();
    expect(component.showCards).toBeFalse();
  });

  it('should get group cards when requested from RESTful api', () => {
    const groupCards: Card[] = require('../../../../mocks/data.json').groupCards;
    spyOn(bookmarkService, 'getGroupCards').and.returnValues(of(groupCards));
    fixture.detectChanges();
    expect(bookmarkService.getGroupCards).toHaveBeenCalledTimes(1);
    expect(component.cards).toBeDefined();
    expect(component.zeroCards).toBeFalse();
    expect(JSON.stringify(component.cards)).toEqual(JSON.stringify(groupCards));
  });

  it('should display not display cards fetched from RESTful api', () => {
    const zeroCards: Card[] = require('../../../../mocks/data.json')['zero-cards'];
    spyOn(bookmarkService, 'getGroupCards').and.returnValues(of(zeroCards));
    fixture.detectChanges();
    expect(bookmarkService.getGroupCards).toHaveBeenCalledTimes(1);
    expect(component.cards).toBeDefined();
    expect(component.showCards).toBeTrue();
    expect(component.cardsLoaded).toBeTrue();
    expect(component.zeroCards).toBeTrue();
    expect(JSON.stringify(component.cards)).toEqual(JSON.stringify(zeroCards));
  });
});
