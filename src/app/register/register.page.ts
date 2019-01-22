import { Component, OnInit } from '@angular/core';
import { SharedService } from '../providers/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public page = 1;
  constructor(
    private sharedService: SharedService
  ) {
  }

  ngOnInit() {

  }

  nextClickedHandler(e) {
    this.page += 1;
  }

}
