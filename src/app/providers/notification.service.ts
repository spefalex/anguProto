import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private toast: any;
  private loading: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  public async presentToast(message) {
    this.toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    this.toast.present();
  }

  async presentLoading(message?) {
    this.loading = await this.loadingCtrl.create({
      message: message
    });
    return await this.loading.present();
  }

  dismissLoading() {
    this.loading.dismiss();
  }

}
