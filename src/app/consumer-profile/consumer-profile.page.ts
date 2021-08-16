import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RecordModalComponent } from '../modals/record-modal/record-modal.component';

@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.page.html',
  styleUrls: ['./consumer-profile.page.scss'],
})
export class ConsumerProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  status = 'unpaid';
  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }

  async openReadModal(){
    let modal = await this.modalCtrl.create({
      component: RecordModalComponent,
      cssClass:'my-custom-modal-css'
    });
    modal.present();
  }

}
