/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-08 21:29:06 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-15 23:55:08
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App imports */
import { NotFoundComponent, RandomImageService, RandomQuoteService } from '../NotFound';
import { ChannelsComponent } from '../Channels';
import { AboutComponent } from '../About';


/* ===================================== */
/*                ROUTES                 */
/* ===================================== */
const routes: Routes = [
  {
    path: 'channels',
    component: ChannelsComponent
  },
  { 
    path: 'about',
    component: AboutComponent
  },
  { 
    path: '',
    redirectTo: '/channels',
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: NotFoundComponent 
  }
];

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */
@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    NotFoundComponent,
    ChannelsComponent,
    AboutComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RandomImageService,
    RandomQuoteService
  ]
})

/* ===================================== */
/*                EXPORT                 */
/* ===================================== */
export class AppRoutingModule { }
