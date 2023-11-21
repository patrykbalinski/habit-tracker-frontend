import { TestBed } from '@angular/core/testing';

import { ApiHabitsStatisticsService } from './api-habits-statistics.service';

describe('ApiHabitsStatisticsService', () => {
  let service: ApiHabitsStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHabitsStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
