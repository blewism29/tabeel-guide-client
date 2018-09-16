/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-09 14:16:04 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-10 22:34:56
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Platform imports */
import { Component, OnInit, Input } from '@angular/core';

/* ===================================== */
/*              DECORATOR                */
/* ===================================== */

@Component({
  selector: 'nav-bar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})

/* ===================================== */
/*                CLASS                  */
/* ===================================== */

export class NavbarItemComponent implements OnInit {

  @Input() name : string;
  @Input() url : string;
  @Input() active : boolean;

  constructor() { 
  }

  ngOnInit() {
  }

}
