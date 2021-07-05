import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaBlogPanelModule } from 'projects/agencycoda/mia-blog-panel/src/public-api';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaAuthModule } from '@agencycoda/mia-auth';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
