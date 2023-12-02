import { TestBed } from '@angular/core/testing';

import { HabitsEditorStorageService } from './habits-editor-storage.service';

describe('HabitsEditorStorageService', () => {
  let service: HabitsEditorStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsEditorStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
