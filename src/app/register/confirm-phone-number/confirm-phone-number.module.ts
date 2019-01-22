import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonicModule } from '@ionic/angular';

import { ConfirmPhoneNumberPage } from './confirm-phone-number.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPhoneNumberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ConfirmPhoneNumberPageModule {}
