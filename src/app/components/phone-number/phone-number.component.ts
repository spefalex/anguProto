import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { CountryCode } from '../../data/country-code';

@Component({
  selector: 'component-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Output() clicked = new EventEmitter();
  public countryCode: Array<any> = CountryCode;
  public formGroup: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) { }

  ngOnInit() {
    console.log("country code: ", this.countryCode)
    this.formGroup = this.parent.form;
    this.formGroup.addControl(
      'phoneCountry', new FormControl('', Validators.required)
    );
    this.formGroup.addControl(
      'phoneNumber', new FormControl('', Validators.required)
    );
  }

  ngAfterViewInit() {
    console.log("country codedd: ", this.countryCode)
  }


}
