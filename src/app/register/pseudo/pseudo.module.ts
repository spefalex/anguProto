import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PseudoPage } from './pseudo.page';

const routes: Routes = [
  {
    path: '',
    component: PseudoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PseudoPageModule {}
