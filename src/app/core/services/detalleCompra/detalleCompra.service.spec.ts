/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetalleCompraService } from './detalleCompra.service';

describe('Service: DetalleCompra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleCompraService]
    });
  });

  it('should ...', inject([DetalleCompraService], (service: DetalleCompraService) => {
    expect(service).toBeTruthy();
  }));
});
