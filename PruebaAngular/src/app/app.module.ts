import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinalComponent } from './componentes/final/final.component';
import { HomeComponent } from './componentes/home/home.component';
import { Pag1Component } from './componentes/pag1/pag1.component';
import { Pag2Component } from './componentes/pag2/pag2.component';
import { HttpClientModule } from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    HomeComponent,
    Pag1Component,
    Pag2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
