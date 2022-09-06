import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@shared/material.module';
import { CommonsModule } from '@shared/commons.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    CommonsModule
  ]
})
export class AuthModule { }
