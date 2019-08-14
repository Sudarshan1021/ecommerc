import { TestBed } from '@angular/core/testing';

import { SellerProdSerService } from './seller-prod-ser.service';

describe('SellerProdSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerProdSerService = TestBed.get(SellerProdSerService);
    expect(service).toBeTruthy();
  });
});
