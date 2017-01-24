import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/menuitem';

@Component({
  selector: '[menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor() { 
  }
  
  ngOnInit() {
    this.menu = JSON.parse('[{"name":"Bags","ref":"/items"},{"name":"Women","ref":"/items"},' +
   	                       '{"name":"Men","ref":"/items"},{"name":"Kids","ref":"/items"}]');
  }



}
