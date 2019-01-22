import { Component, OnInit } from '@angular/core';
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public userStateSubscription: Subscription;
  constructor(public store: Store<AppStore>,) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
   
this.userStateSubscription =this.store
      .select("userState")
      .subscribe(userState => {
        //voir l\'etat du state console.log('message',userState.message);
     console.log(userState.user)
        
      });
  }
}
