import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePasswordPage } from '../create-password/create-password';

@Component({
  selector: 'page-email-address',
  templateUrl: 'email-address.html'
})
export class EmailAddressPage {

  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.pop();
  }
  createPassword() {
    this.navCtrl.push(CreatePasswordPage);
  }
}
