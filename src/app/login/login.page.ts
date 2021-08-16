import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storge: Storage
  ) { }

  icon = 'eye-off'
  type = 'password';
  showPass = false;
  ngOnInit() {
    let test = [{
      test: 'a'
    }]
    this.storge.set('test', test )
  }

  login(){
    this.navCtrl.navigateRoot('/tabs/tabs/tab1')
  }

  showHidePassword(){
    if(this.showPass){
      this.icon = 'eye';
      this.type = 'text';
    }else{
      this.icon = 'eye-off';
      this.type = 'password';
    }
    this.showPass = !this.showPass
  }

}
