import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCustomizationComponent } from './access-customization.component';

describe('AccessCustomizationComponent', () => {
  let component: AccessCustomizationComponent;
  let fixture: ComponentFixture<AccessCustomizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccessCustomizationComponent]
    });
    fixture = TestBed.createComponent(AccessCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
