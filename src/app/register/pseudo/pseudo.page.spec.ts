import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoPage } from './pseudo.page';

describe('PseudoPage', () => {
  let component: PseudoPage;
  let fixture: ComponentFixture<PseudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
