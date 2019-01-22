import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PhoneNumberPage } from '../register/phone-number/phone-number.page';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';
import { ConfirmPhoneNumberPage } from '../register/confirm-phone-number/confirm-phone-number.page';
import { OtpCodeComponent } from '../components/otp-code/otp-code.component';
import { SharedService } from '../providers/shared.service';
import { PhoneNumberComponent } from '../components/phone-number/phone-number.component';
import { PseudoPage } from '../register/pseudo/pseudo.page';
import { EmailPage } from '../register/email/email.page';
import { CheckPhoneNumberComponent } from '../components/check-phone-number/check-phone-number.component';
// import { PhoneNumberPageModule } from '../register/phone-number/phone-number.module';
// import { ConfirmPhoneNumberPageModule } from '../register/confirm-phone-number/confirm-phone-number.module';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxSpinnerModule,
    // PhoneNumberPageModule,
    // ConfirmPhoneNumberPageModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterPage,
    PhoneNumberPage,
    ConfirmPhoneNumberPage,
    OtpCodeComponent,
    PhoneNumberComponent,
    PseudoPage,
    EmailPage,
    CheckPhoneNumberComponent
  ],
  providers: [
    SharedService
  ]
})
export class RegisterPageModule {}
