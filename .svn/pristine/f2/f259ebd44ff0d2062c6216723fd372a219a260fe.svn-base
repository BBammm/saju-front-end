import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-result-view',
    templateUrl: './result-view.component.html',
    styleUrls: ['./result-view.component.scss'],
})
export class ResultViewComponent implements OnInit {
    @Input() title: string;
    @Input() data: any;
    @Input() type: number;

    public dataList = [];

    constructor() { }

    ngOnInit() {
        if(this.type === 3) {
            this.dataList = Object.values(this.data);
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
        ResultViewComponent
    ],
    exports: [
        ResultViewComponent
    ]
})
export class ResultViewModule { }