import { TestBed } from '@angular/core/testing';

import { HabitsStatisticsStorageService } from './habits-statistics-storage.service';

describe('HabitsStatisticsStorageService', () => {
  let service: HabitsStatisticsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsStatisticsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
