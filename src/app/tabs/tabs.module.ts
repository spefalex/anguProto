import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "../home/home.page";
import { HomePageModule } from "../home/home.module";
import { TeamPage } from "../team/team.page";
import { ResultPage } from "../result/result.page";
import { OfferPage } from "../offer/offer.page";
import { MenuPage } from "../menu/menu.page";
import { PaiementPage } from "../paiement/paiement.page";
import { ObjectifPage } from "../objectif/objectif.page";
import { IonicModule } from "@ionic/angular";
import { TeamPageModule } from "../team/team.module";
import { ResultPageModule } from "../result/result.module";
import { OfferPageModule } from "../offer/offer.module";
import { ObjectifPageModule } from "../objectif/objectif.module";
import { PaiementPageModule } from "../paiement/paiement.module";
import { MenuPageModule } from '../menu/menu.module';
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/(objectif:objectif)",
        pathMatch: "full"
      },
      {
        path: "objectif",
        outlet: "objectif",
        component: ObjectifPage
      },
      {
        path: "result",
        outlet: "result",
        component: ResultPage
      },
      {
        path: "offer",
        outlet: "offer",
        component: OfferPage
      },
      {
        path: "team",
        outlet: "team",
        component: TeamPage
      },
      {
        path: "paiement",
        outlet: "paiement",
        component: PaiementPage
      },
      {
        path: "menu",
        outlet: "menu",
        component: MenuPage
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/(objectif:objectif)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageModule,
    TeamPageModule,
    ResultPageModule,
    OfferPageModule,
    MenuPageModule,
    ObjectifPageModule,
    PaiementPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
  exports: [RouterModule]
})
export class TabsPageModule {}
