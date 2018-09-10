/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-08 21:29:06 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-09 20:38:04
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* System components import */
import { NotFoundComponent } from '../NotFound';


/* ===================================== */
/*                ROUTES                 */
/* ===================================== */
const routes: Routes = [
  {
    path: 'channels',
    component: NotFoundComponent,
    data: { title: 'Channel List' }
  },
  { path: '',
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
    RouterModule.forRoot(routes)
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})

/* ===================================== */
/*                EXPORT                 */
/* ===================================== */
export class AppRoutingModule { }
