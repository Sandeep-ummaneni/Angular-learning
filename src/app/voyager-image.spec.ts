import { TestBed } from '@angular/core/testing';

import { VoyagerImage } from './voyager-image';

describe('VoyagerImage', () => {
  let service: VoyagerImage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyagerImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
