import { Component, OnInit, Input } from "@angular/core";
import { NavController } from "@ionic/angular";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";
import { SharedService, UserService } from "../../providers";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from "../../providers/notification.service";
import { UserService as UserStoreService } from "../../../Stores/User/user.service";
import { StorageService } from "../../../Stores/Services/storage-service";
@Component({
  selector: "app-email",
  templateUrl: "./email.page.html",
  styleUrls: ["./email.page.scss"]
})
export class EmailPage implements OnInit {
  @Input() page;
  public emailForm: FormGroup;
  password: String;
  password1: String;
  textMessage: String;
  textMessageEmail: String;
  email: string;
  public images: any;
  public file: any;
  constructor(
    private sharedService: SharedService,
    private navCtrl: NavController,
    private userService: UserService,
    public spinner: NgxSpinnerService,
    public notification: NotificationService,
    public fb: FormBuilder,
    public userStoreService: UserStoreService,
    public storageService: StorageService
  ) {}
  ngOnInit() {
    this.initForm();
  }

  public next() {
    // this.sharedService.setPageChange("next");
    // this.navCtrl.
  }

  initForm() {
    this.emailForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      password1: ["", Validators.required],
      avatar: null
    });

    this.email = this.emailForm.value["email"];
    this.password = this.emailForm.value["password"];
    this.password1 = this.emailForm.value["password1"];
    this.images = "assets/imgs/avatar_default.png";
  }
  verifiePassword(str) {
    if (this.password != this.password1) {
      this.textMessage = "mot de passe n'est pas identique";
    } else {
      this.textMessage = "";
    }
  }
  validateEmail(str) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(this.email)) {
      this.textMessageEmail = "Email invalid";
      return false;
    } else {
      this.textMessageEmail = "";
      return true;
    }
  }
  stateNext() {
    if (this.password != this.password1) {
      return false;
    } else {
      return true;
    }
  }
  onFileChange(event) {
    let reader = new FileReader();
    console.log(event.target.files);

    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.emailForm.get("avatar").setValue({
          filename: file.name,
          filetype: file.type
        });
        this.images = reader.result;
      };
    }
  }
  public confirmEmail() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 10000);

    if (this.images != "assets/imgs/avatar_default.png") {
      this.userStoreService.addAvatar(
        localStorage.getItem("id_user"),
        this.file
      );
    }
    this.userService
      .confirmEmail(
        sessionStorage.getItem("phoneNumber"),
        sessionStorage.getItem("pseudo"),
        this.emailForm.value["email"],
        this.emailForm.value["password"]
      )
      .subscribe(response => {
        if (response.code === 200 && response.message === "email_confirmed") {
          this.spinner.hide();
          this.userStoreService
            .loginUserQL(
              sessionStorage.getItem("pseudo"),
              this.emailForm.value["password"]
            )
            .then(data => {
              localStorage.setItem(
                "token_user",
                data["data"].loginUser.token
              );
              localStorage.setItem(
                "information_user",
                JSON.stringify(data["data"].loginUser.result)
              );
              this.navCtrl.navigateRoot("tabs/(objectif:objectif)");
            });
        } else {
          this.spinner.hide();
          this.notification.presentToast("email déjà existé");
        }
      });
  }
}
