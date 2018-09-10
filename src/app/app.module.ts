/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-08 22:15:00 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-09 20:34:23
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

/* System imports */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './Router';
import { NavbarComponent, NavbarItemComponent } from './Layout';

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/* ===================================== */
/*                EXPORT                 */
/* ===================================== */
export class AppModule { }
