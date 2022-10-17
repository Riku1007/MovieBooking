import { TestBed } from '@angular/core/testing';

import { NumberVerService } from './number-ver.service';

describe('NumberVerService', () => {
  let service: NumberVerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberVerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
