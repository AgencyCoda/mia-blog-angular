import { TestBed } from '@angular/core/testing';

import { MiaBlogService } from './mia-blog.service';

describe('MiaBlogService', () => {
  let service: MiaBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
