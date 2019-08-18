import { TestBed, inject } from '@angular/core/testing';

import { TrafficsignalService } from './trafficsignal.service';

describe('TrafficsignalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrafficsignalService]
    });
  });

  it('should be created', inject([TrafficsignalService], (service: TrafficsignalService) => {
    expect(service).toBeTruthy();
  }));
});
