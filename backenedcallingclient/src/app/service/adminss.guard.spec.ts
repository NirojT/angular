import { TestBed } from '@angular/core/testing';

import { AdminssGuard } from './adminss.guard';

describe('AdminssGuard', () => {
  let guard: AdminssGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminssGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
