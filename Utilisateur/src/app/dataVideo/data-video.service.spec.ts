import { TestBed } from '@angular/core/testing';

import { DataVideoService } from './data-video.service';

describe('DataVideoService', () => {
  let service: DataVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
