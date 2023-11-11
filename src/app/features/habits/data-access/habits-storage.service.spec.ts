import { TestBed } from '@angular/core/testing';

import { HabitsStorageService } from './habits-storage.service';

describe('HabitsStorageService', () => {
  let service: HabitsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
