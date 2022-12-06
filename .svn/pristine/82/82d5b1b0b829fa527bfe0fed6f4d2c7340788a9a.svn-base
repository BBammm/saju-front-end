import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SajuService {

    private httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        ),
        responseType: 'text' as 'json'
    };

    constructor(
       private http: HttpClient,
    ) { }

    /**
     * 사주 전체 데이터
     */
     public getAllSaju() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli-all-life`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 총평
     */
     public getSajuMyungli() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/total`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 건강운
     */
     public getSajuMyungliHealth() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/health`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 선천성격운
     */
     public getSajuMyungliCharacter() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/character`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 직업운
     */
     public getSajuMyungliJob() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/job`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 시기별운세
     */
     public getSajuMyungliSigi() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/sigi`);
    }

    /**
     * 사주 자평명리학 평생총운
     * 부부애정운
     */
     public getSajuMyungliCouple() {
        return this.http.get<any>(`${environment.api.v1}/saju/myungli/all/couple-affection`);
    }

    /**
     * 사주 올해의 토정비결
     * 일년신수 전반기
     */
     public getSajuTojungHalfyear1() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/first-half-year`);
    }

    /**
     * 사주 올해의 토정비결
     * 일년신수 후반기
     */
     public getSajuTojungHalfyear2() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/second-half-year`);
    }

    /**
     * 사주 올해의 토정비결
     * 연애운
     */
     public getSajuTojungLove() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/love`);
    }

    /**
     * 사주 올해의 토정비결
     * 건강운
     */
     public getSajuTojungHealth() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/health`);
    }

    /**
     * 사주 올해의 토정비결
     * 직장운
     */
     public getSajuTojungJob() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/job`);
    }

    /**
     * 사주 올해의 토정비결
     * 소망운
     */
     public getSajuTojungHope() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/hope`);
    }

    /**
     * 사주 올해의 토정비결
     * 월별운
     */
     public getSajuTojungMonth() {
        return this.http.get<any>(`${environment.api.v1}/saju/tojung/monthly`);
    }

    /**
     * 새해 신수
     * 총운
     */
     public getSajuSinsuTotal() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/total`);
    }

    /**
     * 새해 신수
     * 사업거래운
     */
     public getSajuSinsuBusiness() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/business`);
    }

    /**
     * 새해 신수
     * 연인애정운
     */
     public getSajuSinsuLove() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/love`);
    }

    /**
     * 새해 신수
     * 건강질병운
     */
     public getSajuSinsuHealth() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/health`);
    }

    /**
     * 새해 신수
     * 여행이사운
     */
     public getSajuSinsuMove() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/move`);
    }

    /**
     * 새해 신수
     * 직장관록운
     */
     public getSajuSinsuJob() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/job`);
    }

    /**
     * 새해 신수
     * 월별운
     */
     public getSajuSinsuMonth() {
        return this.http.get<any>(`${environment.api.v1}/saju/sinsu/monthly`);
    }

    /**
     * 전생운
     */
     public getSajuPastlife() {
        return this.http.get<any>(`${environment.api.v1}/saju/past-life`);
    }
}
