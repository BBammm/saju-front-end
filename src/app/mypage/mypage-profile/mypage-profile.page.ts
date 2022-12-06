import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from './service/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mypage-profile',
    templateUrl: './mypage-profile.page.html',
    styleUrls: ['./mypage-profile.page.scss'],
})
export class MypageProfilePage implements OnInit {

    public isBtnActive: boolean;

    public myProfileFormGroup: FormGroup;
    public myProfile:any = {};

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.data.subscribe({
            next: (data) => {
                this.myProfile = {...data.profile.profiles[0]}
                console.log('this.myProfile = ', this.myProfile);
                if(this.myProfile.gender === 'M') {
                    this.isBtnActive = true;
                } else {
                    this.isBtnActive  = false;
                }
            }
        })
        this.myProfileFormGroup = new FormGroup({
            name: new FormControl(this.myProfile.name, [Validators.required]),
            gender: new FormControl(this.myProfile.gender, [Validators.required]),
            sl: new FormControl(this.myProfile.sl, [Validators.required]),
            birth_ym: new FormControl(this.myProfile.birth_ym, [Validators.minLength(8), Validators.maxLength(8), Validators.required]),
            birth_time: new FormControl(this.myProfile.birth_time.replace(/([^:]{2}(?!:))/, '$1:')),
            birth_time_flag: new FormControl(this.myProfile.birth_time === null ? '3' : '1', [Validators.required]),
            flat_moon: new FormControl(this.myProfile.sl === 'M' ? 1 : 0, [Validators.required]),
            me: new FormControl(1, [Validators.required]),
        });
    }

    birthTimeFormat(event) {
        if (event.data && this.myProfileFormGroup.get('birth_time').value.length < 4) {
            const two_chars_no_colons_regex = /([^:]{2}(?!:))/;
            event.target.value = event.target.value.replace(two_chars_no_colons_regex, "$1:");
        }
    }

}
