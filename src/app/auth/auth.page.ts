import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialAuthService } from './service/social-auth.service';
import { AuthService } from '../core/auth/auth.service';

declare const Kakao: any
declare const naver: any

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    public CLIENT_ID = "aa7e499d760c86bf748f1bccbc62fb4c";
    // public REDIRECT_URL = "http://127.0.0.1:8100/auth";
    public REDIRECT_URL = "http://admin.saju.fxstar.co.kr/auth/social/kakao/login";
    public URL = `https://kauth.kakao.com/oauth/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URL}&response_type=code`;

    public code: string = null;

    public kakao_account: any;
    public kakao_user_sub: number;

    public naverApi: any;

    constructor(
        public loadingController: LoadingController,
        private router: Router,
        private iab: InAppBrowser,
        private platform: Platform,
        private ngZone: NgZone,
        private socialSvc: SocialAuthService,
        private authSvc: AuthService
    ) {

    }

    ngOnInit() {
        this.naverApi = new naver.LoginWithNaverId({
            clientId: 'bgEZqgFJs6Dwy37NmlVW',
            callbackUrl: 'http://127.0.0.1:8100/auth',
            isPopup: false,
            callbackHandle: true,
        });
        this.naverApi.init();
        this.naverLoginFlag();
    }

    /**
     * 카카오 로그인
     */
    public async kakaoLogin() {
        if (this.platform.is('android') || this.platform.is('ios')) {
            const browser = this.iab.create(this.URL);
            browser.on('loadstop').subscribe((event) => {
                browser.executeScript({
                    code: `\
                        login();
                    `
                }).then((res) => {
                    const data = res[0];
                    browser.close();
                    this.authSvc.setToken(data.userToken);
                    if (data.error) return;
                    if (data.profile === null) {
                        this.ngZone.run(() => {
                            this.router.navigate(['/', 'join']);
                        });
                    } else {
                        this.ngZone.run(() => {
                            this.router.navigate(['/', 'home']);
                        });
                    }
                });
            });
        } else {
            Kakao.Auth.login({
                // redirectUri: this.REDIRECT_URL,
                scope: `account_email, age_range, profile_nickname`,
                success: (async (res) => {
                    await Kakao.API.request({
                        url: '/v2/user/me',
                        success: (res) => {
                            console.log(res);
                            this.kakao_account = res.kakao_account;
                            this.kakao_user_sub = res.id;
                        }
                    });
                    this.socialSvc.kakaoWebLogin(this.kakao_user_sub, this.kakao_account).subscribe((res) => {
                        if (res.error) return;
                        if (res.profile === null) {
                            this.router.navigate(['/join']);
                        } else {
                            this.router.navigate(['/home']);
                        }
                    });
                }),
                fail: (err) => {
                    console.log('error = ', err);
                }
            });
        }
    }

    /**
     * logout
     */
    public logout() {
        if (Kakao.Auth.getAccessToken()) {
            Kakao.Auth.logout(() => {
                this.authSvc.removeToken();
                this.authSvc.removeUser();
            });
        }
        this.naverApi.logout();
    }

    /**
     * 네이버 로그인
     */
    public naverLogin() {
        this.naverApi.getLoginStatus(status => {
            if (!status) {
                this.naverApi.authorize();
            }
        });
    }

    /**
     * 로그인 callback시 회원정보 등 을 넘긴 후 home으로 redirect
     */
    public naverLoginFlag() {
        this.naverApi.getLoginStatus(status => {
            if (status) {
                const params = {
                    email: this.naverApi.user.email,
                    id: this.naverApi.user.id,
                    name: this.naverApi.user.name
                }
                this.socialSvc.naverWebLogin(params).subscribe((res) => {
                    console.log(res);
                    if (res.error) return;
                    if (res.profile === null) {
                        this.router.navigate(['/join']);
                    } else {
                        this.router.navigate(['/home']);
                    }
                });
            }
        });
    }

}




/* javascript 로그인 */
// Kakao.Auth.login({
//     // redirectUri: this.REDIRECT_URL,
//     scope: `birthday, account_email, age_range`,
//     success: (async (res) => {
//         console.log(res);
//         await Kakao.API.request({
//             url: '/v2/user/me',
//             success: (res) => {
//                 const kakao_account = res.kakao_account;
//                 console.log(kakao_account);
//             }
//         })
//         this.router.navigate(['/', 'join']);
//     }),
//     fail: (err) => {
//         console.log('eer-r = ', err);
//     }
// })

/* restapi 로그인 */
// const openCapacitorSite = async () => {
//     await Browser.open({ url: this.URL });
// };
// openCapacitorSite().then(() => {
//     console.log('browser Open');
//     Browser.addListener('browserPageLoaded', () => {
//         console.log('browserPageLoaded');
//         // Browser.close();
//     });
//     Browser.addListener('browserFinished', () => {
//         console.log('browserFinished');
//         // Browser.close();
//     });
// });