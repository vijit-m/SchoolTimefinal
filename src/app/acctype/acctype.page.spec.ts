import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctypePage } from './acctype.page';

describe('AcctypePage', () => {
  let component: AcctypePage;
  let fixture: ComponentFixture<AcctypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
