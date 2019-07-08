import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachaccPage } from './teachacc.page';

describe('TeachaccPage', () => {
  let component: TeachaccPage;
  let fixture: ComponentFixture<TeachaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachaccPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
