/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tabla9Component } from './tabla9.component';

describe('Tabla9Component', () => {
  let component: Tabla9Component;
  let fixture: ComponentFixture<Tabla9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabla9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
