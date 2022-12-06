import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultPageRoutingModule } from './adult-routing.module';

import { AdultPage } from './adult.page';
import { HeaderModule } from '../components/header/header.component';
import { CalTodayModule } from '../components/cal-today/cal-today.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultPageRoutingModule,
    CalTodayModule,
    HeaderModule
  ],
  declarations: [AdultPage]
})
export class AdultPageModule {}
