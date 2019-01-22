import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifPage } from './objectif.page';

describe('ObjectifPage', () => {
  let component: ObjectifPage;
  let fixture: ComponentFixture<ObjectifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
