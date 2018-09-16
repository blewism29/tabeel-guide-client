/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-10 20:30:28 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-10 22:07:25
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* patform imports */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';  // change to new RxJS 6 import syntax

/* App imports */
import { environment } from '../../../../environments/environment';

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */

@Injectable({
  providedIn: 'root'
})

/* ===================================== */
/*                CLASS                  */
/* ===================================== */

export class RandomImageService {

  apiUrl: string;

  constructor() { 
    this.apiUrl = environment.randomImageApiUrl;
  }

  getRandomImage () {
    return from(Promise.resolve(this.apiUrl));
  }
}
