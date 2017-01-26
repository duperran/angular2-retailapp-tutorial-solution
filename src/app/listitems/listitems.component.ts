import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../service/item.service'; 

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {

  items: Item[];
  isFavorite: boolean[];

  constructor(itemSrv: ItemService) { 

      this.items = itemSrv.getItems(); 
      this.isFavorite = new Array(this.items.length)
  }

  ngOnInit() {
  }

  setAsFavorite(i) {
    this.isFavorite[i] = (this.isFavorite[i])?false:true;
  }

}
