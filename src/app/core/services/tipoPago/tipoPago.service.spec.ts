/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoPagoService } from './tipoPago.service';

describe('Service: TipoPago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoPagoService]
    });
  });

  it('should ...', inject([TipoPagoService], (service: TipoPagoService) => {
    expect(service).toBeTruthy();
  }));
});
