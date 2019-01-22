import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { 
  SharedService, 
  UserService,
  NotificationService 
} from '../../providers';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-confirm-phone-number',
  templateUrl: './confirm-phone-number.page.html',
  styleUrls: ['./confirm-phone-number.page.scss'],
})
export class ConfirmPhoneNumberPage implements OnInit {
  @Output() nextClicked = new EventEmitter();
  @Input() page;
  public smsCodeForm: FormGroup;
  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService,
    private userService: UserService,
    public spinner:NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.smsCodeForm = new FormGroup({
    });
  }

  next() {
    this.nextClicked.next(this.page);
  }

  public confirmPhoneNumber() {
    console.log(this.smsCodeForm.value['smsCode']);
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 10000);
    this.userService.confirmPhoneNumber(sessionStorage.getItem('phoneNumber'), this.smsCodeForm.value['smsCode']).subscribe(
      response => {
        console.log("response : ", response)
        if (response.code === 200) {
          this.spinner.hide();
          this.next();
        } else if(response.message === 'wrong_code_sms') {
          this.notificationService.presentToast('Wrong code');
        }
        this.spinner.hide();
      }
    );
  }

}
