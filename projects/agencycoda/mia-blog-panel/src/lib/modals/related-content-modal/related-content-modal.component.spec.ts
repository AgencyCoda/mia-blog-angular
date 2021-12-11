import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedContentModalComponent } from './related-content-modal.component';

describe('RelatedContentModalComponent', () => {
  let component: RelatedContentModalComponent;
  let fixture: ComponentFixture<RelatedContentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedContentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
