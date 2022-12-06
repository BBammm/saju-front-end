import * as moment from 'moment';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-cal-today',
    templateUrl: './cal-today.component.html',
    styleUrls: ['./cal-today.component.scss'],
})
export class CalTodayComponent implements OnInit {

    public currentDate: any;
    public currentDay: any;

    constructor() { }

    ngOnInit() {
        this.getCurrentDay();
    }

    private getCurrentDay() {
        this.currentDate = moment().format('MM월 DD일')
        const day = moment().weekday();
        switch (day) {
            case 0:
                this.currentDay = '일요일';
                break;
            case 1:
                this.currentDay = '월요일';
                break;
            case 2:
                this.currentDay = '화요일';
                break;
            case 3:
                this.currentDay = '수요일';
                break;
            case 4:
                this.currentDay = '목요일';
                break;
            case 5:
                this.currentDay = '금요일';
                break;
            case 6:
                this.currentDay = '토요일';
                break;
        }
    }

}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        CalTodayComponent
    ],
    exports: [
        CalTodayComponent
    ]
})
export class CalTodayModule { }