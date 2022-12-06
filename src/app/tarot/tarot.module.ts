import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarotPageRoutingModule } from './tarot-routing.module';

import { TarotPage } from './tarot.page';
import { HeaderModule } from '../components/header/header.component';
import { CalTodayModule } from '../components/cal-today/cal-today.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarotPageRoutingModule,
    CalTodayModule,
    HeaderModule
  ],
  declarations: [TarotPage]
})
export class TarotPageModule {}
