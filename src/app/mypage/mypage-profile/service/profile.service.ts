import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * 메인페이지에 사용 할 회원 기본정보
     */
    public getProfile() {
        return this.http.get(`${environment.api.v1}/profiles`);
    }
}
