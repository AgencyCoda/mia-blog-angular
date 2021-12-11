import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaBlogPanelModule } from 'projects/agencycoda/mia-blog-panel/src/public-api';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { MiaCoreModule, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { MiaAuthModule, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MiaFormModule } from '@agencycoda/mia-form';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    MiaCoreModule,
    MiaAuthModule,
    MiaFormModule,
    MiaBlogPanelModule
  ],
  providers: [
    {
      provide: MIA_AUTH_PROVIDER,
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        //baseUrl: 'http://0.0.0.0:8080/'
      }
    },
    {
      provide: MIA_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        //baseUrl: 'http://0.0.0.0:8080/'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
