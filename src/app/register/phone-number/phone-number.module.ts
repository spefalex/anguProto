import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '../../../../node_modules/@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
// import { PhoneNumberComponent } from '../../components/phone-number/phone-number.component';
import { PhoneNumberPage } from './phone-number.page';
import { UserQuery } from '../../providers/graphql/query/user-query';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  {
    path: '',
    component: PhoneNumberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxSpinnerModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    // PhoneNumberPage,
    // PhoneNumberComponent
  ],
  providers: [
    UserQuery
  ]
})
export class PhoneNumberPageModule {}
