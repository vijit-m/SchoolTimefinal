import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudaccPage } from './studacc.page';

describe('StudaccPage', () => {
  let component: StudaccPage;
  let fixture: ComponentFixture<StudaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudaccPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
