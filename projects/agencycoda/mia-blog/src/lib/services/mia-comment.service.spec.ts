import { TestBed } from '@angular/core/testing';

import { MiaCommentService } from './mia-comment.service';

describe('MiaCommentService', () => {
  let service: MiaCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
