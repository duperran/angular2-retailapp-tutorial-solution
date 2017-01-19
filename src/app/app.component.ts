import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ElementRef } from '@angular/core';
import { Router, RouterModule, NavigationStart } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ItemService } from './service/item.service';
import {MenuItem} from './models/menuitem';

@Component({
  selector: '#dynamic-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent {

  menu: MenuItem[];

  title = 'app works!';

  ngOnInit() {
   this.menu = JSON.parse('[{"name":"Bags","ref":"/items"},{"name":"Women","ref":"/items"},' +
   	'{"name":"Men","ref":"/items"},{"name":"Kids","ref":"/items"}]');
   console.log(this.menu);
  }

}
