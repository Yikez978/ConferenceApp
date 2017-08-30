import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public AlertCtrl:AlertController ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  doAlert(title, message, buttonText) {
      console.log(message);
      let alert = this.AlertCtrl.create({
          title: title,
          subTitle: message,
          buttons: [buttonText]
      });
      return alert; 
    }

}
