import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { environment } from '../../../environments/environment';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    environment.apiBaseUrl = '';
    const service: BaseService = TestBed.inject(BaseService);
    expect(service).toBeTruthy();
    expect(service.getBaseUrl()).toBe('');
  });

  it('should be able to return the environment specific baseUrl', () => {
    environment.apiBaseUrl = 'http://localhost:3000';
    const service: BaseService = TestBed.inject(BaseService);
    expect(service).toBeTruthy();
    expect(service.getBaseUrl()).toBe('http://localhost:3000');
  });
});
