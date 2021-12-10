import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaCreatorPostPageComponent } from './mia-creator-post-page.component';

describe('MiaCreatorPostPageComponent', () => {
  let component: MiaCreatorPostPageComponent;
  let fixture: ComponentFixture<MiaCreatorPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaCreatorPostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaCreatorPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
