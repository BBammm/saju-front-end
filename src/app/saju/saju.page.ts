import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Subscription } from 'rxjs';
import { HomeService } from '../home/service/home.service';
import { SajuService } from './service/saju.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-saju',
    templateUrl: './saju.page.html',
    styleUrls: ['./saju.page.scss'],
})
export class SajuPage implements OnInit {

    public userSubscription: Subscription;
    public profile: any;
    public mainUser: any;
    public sajuData: any;
    public healthData: any;

    public bannerFlag = 'myungli';
    public subBannerFlag = 'total';

    public isUserPending = true;
    public isMainUserPending = true;
    public isSajuPending = true;

    constructor(
        private authSvc: AuthService,
        private homeSvc: HomeService,
        private sajuSvc: SajuService,
        private loadingCtrl: LoadingController
    ) { }

    ngOnInit() {
        this.setUser();
        this.getMainUserData();
        this.getTotalData();
    }

    private setOhengFormat(oheng: any) {
        switch(oheng) {
            case '土':
                return {oheng: '土:토', class: 'saturday'};
            case '火':
                return {oheng: '火:화', class: 'tuesday'};
            case '木':
                return {oheng: '木:목', class: 'thursday'};
            case '金':
                return {oheng: '金:금', class: 'friday'};
            case '水':
                return {oheng: '水:수', class: 'wednesday'};
        }
    }

    private setUser() {
        this.userSubscription = this.authSvc.profile$.subscribe({
            next: (profileInfo) => {
                this.profile = profileInfo.profile;
                this.profile.birth_format = this.profile.birth_ym.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
                this.isUserPending = false;
            }
        });
        this.authSvc.profileSource.next();
    }

    private getMainUserData() {
        this.homeSvc.getMainUserInfo().subscribe({
            next: (res: any) => {
                console.log(res);
                this.mainUser = res.manse;
                this.mainUser.day_e_oheng_format = this.setOhengFormat(this.mainUser.day_e_oheng);
                this.mainUser.day_h_oheng_format = this.setOhengFormat(this.mainUser.day_h_oheng);
                this.mainUser.hour_e_oheng_format = this.setOhengFormat(this.mainUser.hour_e_oheng);
                this.mainUser.hour_h_oheng_format = this.setOhengFormat(this.mainUser.hour_h_oheng);
                this.mainUser.month_e_oheng_format = this.setOhengFormat(this.mainUser.month_e_oheng);
                this.mainUser.month_h_oheng_format = this.setOhengFormat(this.mainUser.month_h_oheng);
                this.mainUser.month_h_oheng_format = this.setOhengFormat(this.mainUser.month_h_oheng);
                this.mainUser.year_e_oheng_format = this.setOhengFormat(this.mainUser.year_e_oheng);
                this.mainUser.year_h_oheng_format = this.setOhengFormat(this.mainUser.year_h_oheng);
                this.isMainUserPending = false;
            }
        });
    }

    /**
     * 사주총평
     */
    public getTotalData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungli().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 건강운
     */
    public getHealthData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungliHealth().subscribe({
            next: (res: any) => {
                this.sajuData = {...res};
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 선천성격운
     */
    public getCharacterData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungliCharacter().subscribe({
            next: (res: any) => {
                this.sajuData = {...res};
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 직업운
     */
    public getJobData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungliJob().subscribe({
            next: (res: any) => {
                this.sajuData = {...res};
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 시기별운세
     */
    public getSigiData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungliSigi().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 부부애정운
     */
    public getCoupleData() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuMyungliCouple().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 일년신수 전반기
     */
    public getTojungFirstYear() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungHalfyear1().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 일년신수 후반기
     */
    public getTojungSecondYear() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungHalfyear2().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 연애운
     */
    public getTojungLove() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungLove().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 건강운
     */
    public getTojungHealth() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungHealth().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 직장운
     */
    public getTojungJob() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungJob().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 소망운
     */
    public getTojungHope() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungHope().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 토정 월별운
     */
    public getTojungMonth() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuTojungMonth().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 총운
     */
    public getSinsuTotal() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuTotal().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 사업거래운
     */
    public getSinsuBusiness() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuBusiness().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 연인애정운
     */
    public getSinsuLove() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuLove().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 건강질병운
     */
    public getSinsuHealth() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuHealth().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 여행이사운
     */
    public getSinsuMove() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuMove().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 직장관록운
     */
    public getSinsuJob() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuJob().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 신수 월별운
     */
    public getSinsuMonth() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuSinsuMonth().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

    /**
     * 전생운
     */
    public getPastLift() {
        this.isSajuPending = true;
        this.sajuData = null;
        this.sajuSvc.getSajuPastlife().subscribe({
            next: (res: any) => {
                this.sajuData = res.data;
                this.isSajuPending = false;
            }
        });
    }

}
