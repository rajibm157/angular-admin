import { TitleStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@layout/layout.module';
import { LoadingComponent } from '@components/loading/loading.component';
import { ErrorComponent } from '@components/error/error.component';

import { JwtInterceptor } from '@helpers/jwt.interceptor';
import { ErrorInterceptor } from '@helpers/error.interceptor';
import { AuthService } from '@services/auth.service';
import { TitleStrategyService } from '@helpers/title-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LayoutModule
  ],
  providers: [
    AuthService,
    { provide: TitleStrategy, useClass: TitleStrategyService },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
