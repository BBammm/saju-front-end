import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FortuneService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * 전체 띄별 운세 갖고오기
     */
    public getZodiacList() {
        return this.http.get<any>(`${environment.api.v1}/data/fourtune/zodiac/all`);
    }
}
