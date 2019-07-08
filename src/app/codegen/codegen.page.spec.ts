import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodegenPage } from './codegen.page';

describe('CodegenPage', () => {
  let component: CodegenPage;
  let fixture: ComponentFixture<CodegenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodegenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodegenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
