import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ObjectifPage } from '../objectif/objectif.page';
import { ObjectifPageModule } from '../objectif/objectif.module';
import { IonicModule } from '@ionic/angular';

import { AcceuilPage } from './acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   // ObjectifPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcceuilPage]
})
export class AcceuilPageModule {}
