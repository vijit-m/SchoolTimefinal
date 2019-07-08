import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TphotoPage } from './tphoto.page';

describe('TphotoPage', () => {
  let component: TphotoPage;
  let fixture: ComponentFixture<TphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TphotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
