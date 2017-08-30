import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-title',
  templateUrl: 'title.html'
})
export class TitlePage {

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
  
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

}