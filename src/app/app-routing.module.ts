import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'acceuil', loadChildren: './acceuil/acceuil.module#AcceuilPageModule'},
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'edit-profil', loadChildren: './edit-profil/edit-profil.module#EditProfilPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
