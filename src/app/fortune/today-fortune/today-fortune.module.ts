import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayFortunePageRoutingModule } from './today-fortune-routing.module';

import { TodayFortunePage } from './today-fortune.page';
import { HeaderModule } from '../../components/header/header.component';
import { CalTodayModule } from '../../components/cal-today/cal-today.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayFortunePageRoutingModule,
    CalTodayModule,
    HeaderModule
  ],
  declarations: [TodayFortunePage]
})
export class TodayFortunePageModule {}
