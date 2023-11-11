import { TestBed } from '@angular/core/testing';

import { ApiHabitsService } from './api-habits.service';

describe('ApiHabitsService', () => {
  let service: ApiHabitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHabitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
