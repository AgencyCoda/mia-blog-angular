import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaBlogPanelComponent } from './mia-blog-panel.component';

describe('MiaBlogPanelComponent', () => {
  let component: MiaBlogPanelComponent;
  let fixture: ComponentFixture<MiaBlogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaBlogPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaBlogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
