import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AuthenticationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
