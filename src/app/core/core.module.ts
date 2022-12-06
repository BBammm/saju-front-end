import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BearerTokenInterceptor } from './interceptors/bearer-token.interceptor';
import { AuthService } from './auth/auth.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BearerTokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
