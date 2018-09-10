/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-09 13:52:57 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-09 20:49:00
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { Component, OnInit } from '@angular/core';

/* System imports */
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  entryComponents: [ NavbarItemComponent ]
})

/* ===================================== */
/*                CLASS                  */
/* ===================================== */

export class NavbarComponent implements OnInit {

  backEnabled : boolean;

  constructor() {
  }

  ngOnInit() {
    this.backEnabled = false;
  }

}
