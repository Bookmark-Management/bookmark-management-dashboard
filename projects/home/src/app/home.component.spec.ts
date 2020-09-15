import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show cards when click on 'Go Back' button", () => {
    expect(component).toBeTruthy();
    component.showCardsPage();
    expect(component.showCards).toBeTrue();
  });

  it("should show create tiny url page when click on 'Create new tiny URL' button", () => {
    expect(component).toBeTruthy();
    component.createTinyURL();
    expect(component.showCards).toBeFalse();
  });
});
