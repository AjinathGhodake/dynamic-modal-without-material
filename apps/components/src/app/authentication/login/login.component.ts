import { DynamicComponent } from './../../../../../../libs/dynamic/src/lib/dynamic';
import { RegistrationComponent } from './../registration/registration.component';

import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookiesService } from '../../services/cookies.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicService } from '@components/dynamic/src/lib/dynamic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private httpService: HttpClientService,
    private router: Router,
    private cookieService: CookiesService,
    private toastr: ToastrService,
    private dynamicService: DynamicService
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  private getAuthenticationToken() {
    this.httpService.post(this.loginForm.value, 'authenticate').subscribe(
      res => {
        this.cookieService.setCookie(res);
        this.router.navigate(['/chat']);
      },
      err => {
        this.toastr.error(err.error.message, 'Connecting');
      }
    );
  }
  abcd() {
    const component: DynamicComponent = new DynamicComponent(
      RegistrationComponent,
      1213213123
    );
    this.dynamicService.open(component);
  }
  close() {
    this.dynamicService.close();
  }
}
