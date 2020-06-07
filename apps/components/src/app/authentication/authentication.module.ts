import { AppRoutingModule } from './../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { DynamicModule } from '@components/dynamic/src/lib/dynamic.module';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DynamicModule,
    FormsModule
  ]
})
export class AuthenticationModule {}
