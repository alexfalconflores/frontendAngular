/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tabla10ComprasComponent } from './tabla10Compras.component';

describe('Tabla10ComprasComponent', () => {
  let component: Tabla10ComprasComponent;
  let fixture: ComponentFixture<Tabla10ComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabla10ComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla10ComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
