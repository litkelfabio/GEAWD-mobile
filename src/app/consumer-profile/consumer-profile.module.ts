import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerProfilePageRoutingModule } from './consumer-profile-routing.module';

import { ConsumerProfilePage } from './consumer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerProfilePageRoutingModule
  ],
  declarations: [ConsumerProfilePage]
})
export class ConsumerProfilePageModule {}
