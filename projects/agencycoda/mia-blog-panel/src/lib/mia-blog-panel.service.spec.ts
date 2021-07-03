import { TestBed } from '@angular/core/testing';

import { MiaBlogPanelService } from './mia-blog-panel.service';

describe('MiaBlogPanelService', () => {
  let service: MiaBlogPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaBlogPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
