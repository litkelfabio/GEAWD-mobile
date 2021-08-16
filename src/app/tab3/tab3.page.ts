import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(){
   
  }
  
  async logout(){
    let alert = await this.alertCtrl.create({
      header: 'LOG OUT',
      message: 'Are you sure do you really want to log out?',
      buttons:[
        {
          text: 'No',
          handler: () => {
            
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            let loading = await this.loadingCtrl.create({
              message:'Logging Out...'
            });
            loading.present();
            setTimeout(() => {
              this.navCtrl.navigateRoot('');
              loading.dismiss();
            }, 1000);
          }
        }
      ]
    });
    alert.present();
  }
}
