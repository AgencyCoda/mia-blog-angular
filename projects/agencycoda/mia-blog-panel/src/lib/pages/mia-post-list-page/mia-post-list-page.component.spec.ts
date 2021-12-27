import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPostListPageComponent } from './mia-post-list-page.component';

describe('MiaPostListPageComponent', () => {
  let component: MiaPostListPageComponent;
  let fixture: ComponentFixture<MiaPostListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPostListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPostListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
