import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedFieldComponent } from './related-field.component';

describe('RelatedFieldComponent', () => {
  let component: RelatedFieldComponent;
  let fixture: ComponentFixture<RelatedFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
