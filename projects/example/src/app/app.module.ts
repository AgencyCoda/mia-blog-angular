import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiaBlogPanelModule } from 'projects/agencycoda/mia-blog-panel/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiaBlogPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
