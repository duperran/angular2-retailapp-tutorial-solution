import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../models/item';
import { ItemActionComponent } from '../item-action/item-action.component';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {

  items: Item[];
  constructor(private itemSrv: ItemService) {

      this.items = itemSrv.getItems();
  }

  ngOnInit() {
  }
}
