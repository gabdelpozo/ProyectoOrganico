import { TestBed } from '@angular/core/testing';

import { ProductosDispoService } from './productos-dispo.service';

describe('ProductosDispoService', () => {
  let service: ProductosDispoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosDispoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
