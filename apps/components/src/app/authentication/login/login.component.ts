import { DynamicComponent } from './../../../../../../libs/dynamic/src/lib/dynamic';
import { RegistrationComponent } from './../registration/registration.component';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicService } from '@components/dynamic/src/lib/dynamic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dynamicService: DynamicService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  open() {
    const component: DynamicComponent = new DynamicComponent(
      RegistrationComponent,
      '1213213123'
    );
    this.dynamicService.open(component);
  }
  close() {
    this.dynamicService.close();
  }
}
