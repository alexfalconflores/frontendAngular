/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetalleVentaService } from './detalleVenta.service';

describe('Service: DetalleVenta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleVentaService]
    });
  });

  it('should ...', inject([DetalleVentaService], (service: DetalleVentaService) => {
    expect(service).toBeTruthy();
  }));
});
