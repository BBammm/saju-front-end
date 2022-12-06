import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypageProfilePageRoutingModule } from './mypage-profile-routing.module';

import { MypageProfilePage } from './mypage-profile.page';
import { HeaderModule } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypageProfilePageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [MypageProfilePage]
})
export class MypageProfilePageModule {}
