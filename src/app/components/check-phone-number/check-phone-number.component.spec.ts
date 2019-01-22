import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPhoneNumberComponent } from './check-phone-number.component';

describe('CheckPhoneNumberComponent', () => {
  let component: CheckPhoneNumberComponent;
  let fixture: ComponentFixture<CheckPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
