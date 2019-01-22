import { Component, OnInit, Input } from "@angular/core";
import {
  ToastController,
  NavController,
  ModalController
} from "@ionic/angular";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UserService as UserStoreService } from "../../Stores/User/user.service";
import { StorageService } from "../../Stores/Services/storage-service";
@Component({
  selector: "app-edit-profil",
  templateUrl: "./edit-profil.page.html",
  styleUrls: ["./edit-profil.page.scss"]
})
export class EditProfilPage implements OnInit {
  public form: FormGroup;
  public username: any;
  public email: any;
  public mobileNumber: any;
  public images: any;
  public file: any;
  @Input() infoUser: any;
  constructor(
    public fb: FormBuilder,
    public userStoreService: UserStoreService,
    public storageService: StorageService,
    public toastController: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      username: ["", Validators.required],
      mobileNumber: ["", Validators.required],
      avatar: null
    });

    this.email = this.infoUser.email;
    this.username = this.infoUser.username;
    this.mobileNumber = this.infoUser.mobileNumber;
    this.images = "assets/imgs/avatar_default.png";
  }

  editProfil() {
    this.userStoreService
      .editPorfil(
        this.username,
        localStorage.getItem("token_user"),
        this.email,
        this.infoUser._id,
        this.mobileNumber
      )
      .then(response => {
        if (response["data"].editProfilUser.code === 200) {
          this.showUpdate();
          this.updateLocalStorage();
          this.modalCtrl.dismiss();
          this.navCtrl.navigateRoot("/profil");
        } else {
          this.presentToast(response["data"].editProfilUser.message);
          this.storageService.clear();
          this.modalCtrl.dismiss();
          this.navCtrl.navigateRoot("/home");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  onFileChange(event) {
    let reader = new FileReader();
    console.log(event.target.files);

    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get("avatar").setValue({
          filename: file.name,
          filetype: file.type
        });
        this.images = reader.result;
      };
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: "top",
      duration: 3000
    });
    toast.present();
  }

  showUpdate() {
    this.infoUser.username = this.username;
    this.infoUser.mobileNumber = this.mobileNumber;
    this.infoUser.email = this.email;
  }

  updateLocalStorage() {
    var newObj = JSON.parse(localStorage.getItem("information_user"));
    newObj.username = this.username;
    newObj.mobileNumber = this.mobileNumber;
    newObj.email = this.email;
    newObj._id = this.infoUser._id;
    newObj.photos = "";
    localStorage.setItem("information_user", JSON.stringify(newObj));
  }
}
