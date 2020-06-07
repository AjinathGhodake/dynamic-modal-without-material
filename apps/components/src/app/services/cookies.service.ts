import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  constructor(private _cookieService: CookieService) {}
  getCookie(key: string) {
    return JSON.parse(this._cookieService.get(key));
  }
  setCookie(data: any) {
    return this._cookieService.set('auth-token', JSON.stringify(data));
  }
}
