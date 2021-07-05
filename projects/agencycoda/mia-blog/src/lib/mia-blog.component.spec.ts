import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaBlogComponent } from './mia-blog.component';

describe('MiaBlogComponent', () => {
  let component: MiaBlogComponent;
  let fixture: ComponentFixture<MiaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
