import { TestBed } from '@angular/core/testing';

import { MuseumStoreService } from './museum-store.service';

describe('MuseumStoreService', () => {
  let service: MuseumStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseumStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
