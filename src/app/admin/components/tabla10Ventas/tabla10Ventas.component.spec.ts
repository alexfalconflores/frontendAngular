/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tabla10VentasComponent } from './tabla10Ventas.component';

describe('Tabla10VentasComponent', () => {
  let component: Tabla10VentasComponent;
  let fixture: ComponentFixture<Tabla10VentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabla10VentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla10VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
