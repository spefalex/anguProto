import { Component, OnInit } from "@angular/core";
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import * as jspdf from 'jspdf';
import { UserService as UserStoreService } from "../../Stores/User/user.service"
import domtoimage from 'dom-to-image';
@Component({
  selector: "app-objectif",
  templateUrl: "./objectif.page.html",
  styleUrls: ["./objectif.page.scss"]
})
export class ObjectifPage implements OnInit {
  public userStateSubscription: Subscription;
  constructor(public store: Store<AppStore>, public userStoreService : UserStoreService,) {}

  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };
  }
  ionViewDidEnter() {
    this.userStateSubscription = this.store
      .select("userState")
      .subscribe(userState => {
        //voir l\'etat du state console.log('message',userState.message);
        console.log(userState.user);
      });
  }

  exportPdf() {
    
    domtoimage.toJpeg(document.getElementById('printable-area'), { quality: 0.95 })
    .then(dataUrl => {
        var doc = new jspdf("p","mm","a4");
        doc.addImage(dataUrl, 'PNG', 20, 20, 240, 180);
        doc.save('MYPdf.pdf');
        this.userStoreService.addPDF('file',doc.output('blob'));
        
    });
  }
}
