import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPostEditPageComponent } from './mia-post-edit-page.component';

describe('MiaPostEditPageComponent', () => {
  let component: MiaPostEditPageComponent;
  let fixture: ComponentFixture<MiaPostEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPostEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPostEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
