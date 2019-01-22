import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfilPage } from '../edit-profil/edit-profil.page';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public infoUser : any;
  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EditProfilPage,
      componentProps: { infoUser: this.infoUser }
    });
    return await modal.present();
  
}
  ngOnInit() {
    this.infoUser =JSON.parse(localStorage.getItem("information_user"));
  }
  ionViewDidEnter() {
   
  }
}
