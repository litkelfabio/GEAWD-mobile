import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-record-modal',
  templateUrl: './record-modal.component.html',
  styleUrls: ['./record-modal.component.scss'],
})
export class RecordModalComponent implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async confirmSubmit(){
    let alert = await this.alertCtrl.create({
      message:'Are you sure do you really want to submit?',
      buttons:[
        {
          text:'No',
          role: 'cancel'
        },
        {
          text:'Yes',
          handler: async () => {
            let loading = await this.loadingCtrl.create({
              message:'Updating...'
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.modalCtrl.dismiss();
            }, 2000);
          } 
        }
      ]
    });
    alert.present();
  }
}
