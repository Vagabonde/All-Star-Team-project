import { TestBed, async, inject } from '@angular/core/testing';

import { GroupAttendanceGuard } from './group-attendance.guard';

describe('GroupAttendanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupAttendanceGuard]
    });
  });

  it('should ...', inject([GroupAttendanceGuard], (guard: GroupAttendanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
