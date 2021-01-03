import { TestBed } from '@angular/core/testing';

import { ClubListService } from './club-list.service';

describe('ClubListService', () => {
  let service: ClubListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
