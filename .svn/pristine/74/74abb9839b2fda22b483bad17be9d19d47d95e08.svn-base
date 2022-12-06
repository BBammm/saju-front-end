import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * 메인페이지에 사용 할 회원 기본정보
     */
    public getMainUserInfo() {
        return this.http.get(`${environment.api.v1}/service/user-info`);
    }

    /**
     * 메인페이지에 띠별운세
     */
    public getMainZodiac() {
        return this.http.get(`${environment.api.v1}/data/fourtune/zodiac`);
    }

    /**
     * 메인페이지에 별자리 운세
     */
    public getMainStar() {
        return this.http.get(`${environment.api.v1}/data/fourtune/horoscope`);
    }

    /**
     * 메인페이지에 오늘의 운세
     */
    public getMainToday() {
        return this.http.get(`${environment.api.v1}/saju/myungli/today/total`);
    }

    /**
     * 메인페이지에 혈액형운세
     */
    public getMainBlood(type: any) {
        return this.http.get(`${environment.api.v1}/data/fourtune/blood?type=${type}`);
    }

    /**
     * 메인페이지에 바이로리듬운세
     */
    public getMainBio() {
        return this.http.get(`${environment.api.v1}/data/fourtune/biorhythm`);
    }

    /**
     * 메인페이지에 오늘의 행운색
     */
    public getMainColor() {
        return this.http.get(`${environment.api.v1}/service/today/color`);
    }
}
