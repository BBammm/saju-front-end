import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

    constructor(
        private authSvc: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authSvc.getToken();
        const isApiUrl = req.url.startsWith(environment.api.v1);
        if(token && isApiUrl) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(req);
    }
}