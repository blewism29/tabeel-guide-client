/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-10 20:06:36 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-10 22:13:03
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* patform imports */
import { Injectable } from '@angular/core';
//import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';

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

export class RandomQuoteService {

  apiUrl: string;

  constructor(private http: Http) { 
    this.apiUrl = environment.randomQuoteApiUrl;
  }

  getRandomQuote () {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        }),
        catchError(error => error)
      );
    
    /*return ajax(this.apiUrl).pipe(
      map(res => {
        if (!res.response || !res.response.quotes || res.response.quotes.length === 0) throw new Error(JSON.stringify(res)); 
        res.response.quotes[0].quote;
      }),
      catchError(error => error)
    );*/
  }
}
