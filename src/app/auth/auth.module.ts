import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { HeaderModule } from '../components/header/header.component';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
    providers: [
        InAppBrowser
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        AuthPageRoutingModule,
    ],
    declarations: [AuthPage]
})
export class AuthPageModule { }
