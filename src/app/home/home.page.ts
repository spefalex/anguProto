import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import {
  NavController,
  LoadingController,
  ToastController
} from "@ionic/angular";
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import {
  UserAction,
  UserInformationAction
} from "../../Stores/User/user.reducer";
import { UserService } from "../../Stores/User/user.service";
import { StorageService } from "../../Stores/Services/storage-service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { load } from "@angular/core/src/render3/instructions";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public username: string;
  public password: string;
  public message: string;
  public token: string;
  public userStateSubscription: Subscription;
  public loading: any;
  public stateLoading: boolean = false;
  public stateError: boolean = false;

  constructor(
    public navCtrl: NavController,
    public store: Store<AppStore>,
    public us: UserService,
    public router: Router,
    public storageService: StorageService,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    private spinner: NgxSpinnerService
  ) {}
  ionViewDidEnter() {
    this.userStateSubscription = this.store
      .select("userState")
      .subscribe(userState => {
        //voir l\'etat du state console.log('message',userState.message);
        this.message = userState.message;
        this.stateError = userState.error;
        this.stateLoading = userState.loading;
        this.presentLoading();
        this.showConnexionFailed();
        if (userState.token) {
          localStorage.setItem('token_user',userState.token)
          localStorage.setItem('information_user', JSON.stringify(userState.user))
          this.navCtrl.navigateRoot("/tabs/(objectif:objectif)");
        }
      });
  }
  hideStateMessage() {
    this.message = "";
  }

  showConnexionFailed() {
    if (this.stateError == true) {
      this.presentToast();
      this.message = "";
    }
  }
  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
   /* this.store.dispatch(new UserInformationAction(this.token));
      this.userStateSubscription = this.store
      .select("userState")
      .subscribe(userState => {
          console.log(userState.user)
      });*/
  }

  login() {
    if (this.username == undefined || this.password == undefined) {
      this.message = "Les deux champs sont obligatoires";
    } else {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 10000);
      this.store.dispatch(new UserAction(this.username, this.password));
    }
  }
  presentLoading() {
    if (this.stateError == true || this.stateLoading == false || this.token) {
      this.spinner.hide();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Verifiez votre connexion ou  contacter l'admin ",
      position: "top",
      duration: 3000
    });
    toast.present();
  }
}
