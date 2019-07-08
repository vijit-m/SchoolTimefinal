import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprofilePage } from './sprofile.page';

describe('SprofilePage', () => {
  let component: SprofilePage;
  let fixture: ComponentFixture<SprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
