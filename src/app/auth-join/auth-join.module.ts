import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthJoinPageRoutingModule } from './auth-join-routing.module';

import { AuthJoinPage } from './auth-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthJoinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthJoinPage]
})
export class AuthJoinPageModule {}
