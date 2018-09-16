/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-09 20:35:03 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-10 22:07:52
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RandomQuoteService, RandomImageService } from '../Services';

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

/* ===================================== */
/*                CLASS                  */
/* ===================================== */

export class NotFoundComponent implements OnInit {

  randomImage: string;
  randomQuote: string;

  constructor(private randomQuoteService: RandomQuoteService, private randomImageService: RandomImageService, private cdRef: ChangeDetectorRef) { 
  }



  ngOnInit() {
    this.randomQuoteService.getRandomQuote().subscribe(
      (data) => console.log(data)
    );

    this.randomImage = '';

    this.randomImageService.getRandomImage().subscribe(
      (data) => this.randomImage = data,
      (error) => console.error(error)
    );

    this.cdRef.detectChanges();
  }
}
