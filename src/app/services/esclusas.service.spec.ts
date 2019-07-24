import { TestBed } from '@angular/core/testing';

import { EsclusasService } from './esclusas.service';

describe('EsclusasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsclusasService = TestBed.get(EsclusasService);
    expect(service).toBeTruthy();
  });
});
