import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'component-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private parent: FormGroupDirective
  ) { }

  ngOnInit() {
    this.formGroup = this.parent.form;
    this.formGroup.addControl(
      'smsCode', new FormControl('', Validators.required)
    );
  }

}
