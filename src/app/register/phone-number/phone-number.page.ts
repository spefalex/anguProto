import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../providers/shared.service';
import { StorageService } from '../../../Stores/Services/storage-service';
import { NotificationService } from '../../providers/notification.service';
import { UserService } from '../../providers/user.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {
  @Output() nextClicked: EventEmitter<any> = new EventEmitter();
  @Input() page;
  
  public smsForm: FormGroup;
  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private notification: NotificationService,
    public spinner:NgxSpinnerService,
    public storageService: StorageService,
  ) { }
  

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.smsForm = new FormGroup({
    });
  }

  next() {
    this.nextClicked.emit(this.page)
    
  }

  public checkPhoneNumber() {
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 10000);
    const phoneNumber: string = this.smsForm.value['phoneCountry'] + this.smsForm.value['phoneNumber'];
    let parent = this;
    this.userService.checkphoneNumber(phoneNumber).subscribe(response => {
      if (response.code === 200 && response.message === 'code_sms_sent') {
        this.storageService.set('id_user',response.result['_id']);
        sessionStorage.setItem('phoneNumber', phoneNumber);
        parent.nextClicked.emit(this.page);
        // this.next();
      } 
      
      else if (response.message === 'mauvais_numero') {
        this.spinner.hide();
        this.notification.presentToast('Wrong number');
      } else {
        this.spinner.hide();
        this.notification.presentToast('Utilisateur déjà confirmé');
    
      }
      
     });
  }


}
