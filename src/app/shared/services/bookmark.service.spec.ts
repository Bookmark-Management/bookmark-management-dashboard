import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';
import { BaseService } from './base.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('BookmarkService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let bookmarkService: BookmarkService;
  let baseService: BaseService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BaseService],
    })
  );

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    baseService = TestBed.inject(BaseService);
    bookmarkService = new BookmarkService(httpClientSpy as any, baseService);
  });

  it('should be created', () => {
    expect(bookmarkService).toBeTruthy();
  });

  it('should able to get cards', () => {
    const expectedResponse: any[] = [
      {
        id: 1,
        title: 'Spring Batch',
        createdDate: '2020-09-06T20:14:29.000Z',
        createdBy: 'Pratik Kumar',
        icon: '../../assets/images/sg_logo.png',
        image: '../../assets/images/blank_image.jpeg',
        description: 'A Spring Batch tutorials for beginners in 28 minutes',
      },
      {
        id: 2,
        title: 'Spring Boot',
        createdDate: '2020-09-06T20:14:29.000Z',
        createdBy: 'Pratik Kumar',
        icon: '../../assets/images/sg_logo.png',
        image: '../../assets/images/blank_image.jpeg',
        description: 'A Tutorial to understand the concept of Spring Boot, Spring MVC and Spring in 28 minutes',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedResponse));
    bookmarkService.getTinyUrlsCards().subscribe((actualResponse) => expect(actualResponse).toEqual(expectedResponse));
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
