/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tabla7Component } from './tabla7.component';

describe('Tabla7Component', () => {
  let component: Tabla7Component;
  let fixture: ComponentFixture<Tabla7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabla7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
