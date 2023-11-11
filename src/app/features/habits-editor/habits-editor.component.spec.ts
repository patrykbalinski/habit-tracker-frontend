import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsEditorComponent } from './habits-editor.component';

describe('HabitsEditorComponent', () => {
  let component: HabitsEditorComponent;
  let fixture: ComponentFixture<HabitsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
