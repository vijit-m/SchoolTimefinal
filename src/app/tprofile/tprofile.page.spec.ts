import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TprofilePage } from './tprofile.page';

describe('TprofilePage', () => {
  let component: TprofilePage;
  let fixture: ComponentFixture<TprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
