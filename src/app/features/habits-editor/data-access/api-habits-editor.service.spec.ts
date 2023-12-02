import { TestBed } from '@angular/core/testing';

import { ApiHabitsEditorService } from './api-habits-editor.service';

describe('ApiHabitsService', () => {
  let service: ApiHabitsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHabitsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
