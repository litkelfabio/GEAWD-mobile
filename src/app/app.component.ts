import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonMenuToggle, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private storage: Storage
  ) {}

  ngOnInit(){
    this.menuCtrl.swipeGesture(false)
    this.storage.create()
  }
}
