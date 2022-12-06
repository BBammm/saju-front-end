import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare const Kakao: any

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(
        private platform: Platform,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        Kakao.init('cce4a5ffca66aeaef5bdd301035cdb3d');
        this.platform.ready().then(() => {
        });
    }

}
