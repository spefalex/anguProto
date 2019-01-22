import { Component, OnInit } from '@angular/core';
import {TabsPage} from '../tabs/tabs.page';
import {ObjectifPage} from '../objectif/objectif.page';
import {OfferPage} from '../offer/offer.page';
import {PaiementPage} from '../paiement/paiement.page';
import {TeamPage} from '../team/team.page';
import {ResultPage} from '../result/result.page';
import {MenuPage} from '../menu/menu.page';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  rootPage = TabsPage;
  ObjectifPage=ObjectifPage;
  OfferPage=OfferPage;
  PaiementPage=PaiementPage;
  TeamPage=TeamPage;
  ResultPage=ResultPage;
  MenuPage=MenuPage;
  constructor() { }

  ngOnInit() {
  }

}
