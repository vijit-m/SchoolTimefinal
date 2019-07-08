import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SphotoPage } from './sphoto.page';

describe('SphotoPage', () => {
  let component: SphotoPage;
  let fixture: ComponentFixture<SphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
