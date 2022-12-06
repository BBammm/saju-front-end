import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SocialAuthService {

    constructor(
        private http: HttpClient,
        private authSvc: AuthService
    ) { }

    /**
     * 웹으로 카카오 로그인 시 유저 기본정보 등록
     */
    public kakaoWebLogin(id: number, params: any) {
        return this.http.post<any>(`${environment.api.v1}/login`, {
            provider: 'kakao',
            provider_id: id,
            name: params.profile.nickname,
            email: params.email
        }).pipe(
            tap((res) => {
                this.authSvc.setToken(res.userToken);
                if(res.profile !== null) {
                    this.authSvc.setUser(res.profile);
                }
            })
        );
    }

    /**
     * 웹으로 네이버 로그인 시 유저 기본정보 등록
     */
    public naverWebLogin(params: any) {
        return this.http.post<any>(`${environment.api.v1}/login`, {
            provider: 'naver',
            provider_id: params.id,
            name: params.name,
            email: params.email
        }).pipe(
            tap((res) => {
                this.authSvc.setToken(res.userToken);
                if(res.profile !== null) {
                    this.authSvc.setUser(res.profile);
                }
            })
        );
    }
}