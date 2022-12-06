import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public TOKEN_NAME = 'jwt_token';
    public profileSource = new Subject<any>();
    public profile$ = this.profileSource.asObservable().pipe(
      switchMap(() => this.getUserDetail())
    );

    constructor(
        private http: HttpClient
    ) {
    }

    /* localStorage 관련 */
    public setToken(token: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
    }

    public getToken(): string {
        return localStorage.getItem(this.TOKEN_NAME);
    }

    public removeToken(): void {
        localStorage.removeItem(this.TOKEN_NAME);
    }
    public setUser(user: any): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public getUser(): string {
        return localStorage.getItem('user');
    }

    public removeUser(): void {
        localStorage.removeItem('user');
    }

    /* user API 관련 */
    public getUserDetail() {
        return this.http.get<any>(`${environment.api.v1}/profile`);
    }

    public logOut() {
        this.removeToken();
        this.removeUser();
    }
}
