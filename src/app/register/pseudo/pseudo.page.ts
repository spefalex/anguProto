import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { 
  SharedService, 
  UserService,
  NotificationService
 } from '../../providers';

 import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pseudo',
  templateUrl: './pseudo.page.html',
  styleUrls: ['./pseudo.page.scss'],
})
export class PseudoPage implements OnInit {
  @Output() nextClicked: EventEmitter<any> = new EventEmitter();
  @Input() page;
  public pseudoForm: FormGroup;
  
    constructor(
      private sharedService: SharedService,
      private userService: UserService,
      private notificationService: NotificationService,
      public spinner : NgxSpinnerService,
    ) { }
  
    ngOnInit() {
      this.initForm();
    }
  
    confirmPseudo() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 10000);
      this.userService.confirmPseudo(sessionStorage.getItem('phoneNumber'), this.pseudoForm.value['pseudo']).subscribe(
        response => {
          if (response.code === 200 && response.message === 'pseudo_confirmed') {
            sessionStorage.setItem('pseudo', this.pseudoForm.value['pseudo']);
            this.next();
          } else  {
            this.notificationService.presentToast('pseudo déjà utilisé')
          }
         this.spinner.hide()
        }
      );
    }
  
    next() {
      this.nextClicked.emit(this.page)
    }
  
    private initForm() {
      this.pseudoForm = new FormGroup({
        pseudo: new FormControl('', Validators.required)
      });
    }

}
