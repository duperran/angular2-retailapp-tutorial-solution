import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Router } from '@angular/router';
import { MenuItem} from './models/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu: MenuItem[];

  ngOnInit() {
    this.menu = JSON.parse('[{"name":"Bags","ref":"/items"},{"name":"Women","ref":"/items"},' +
   	                       '{"name":"Men","ref":"/items"},{"name":"Kids","ref":"/items"}]');
  }

  
}
