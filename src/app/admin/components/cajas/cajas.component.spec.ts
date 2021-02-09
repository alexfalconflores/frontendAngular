/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CajasComponent } from './cajas.component';

describe('CajasComponent', () => {
  let component: CajasComponent;
  let fixture: ComponentFixture<CajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
