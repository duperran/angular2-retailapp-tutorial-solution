import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../service/item.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() currentImg: String;
  currentItem: Item;
  currentRoute: ActivatedRoute;
  itemSrv: ItemService;

  // Inject service to retrieve currentr route
  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute) {
    this.currentRoute = activatedRoute;
    this.itemSrv = itemService;
  }

  ngOnInit() {
   this.currentRoute.params.subscribe(params => {
     let id = +params['id']; // (+) converts string 'id' to a number
     this.currentItem =  this.itemSrv.getItem(id);
     this.currentImg = this.currentItem.images[0];
   });
  }

  changePicture(index) {
     this.currentImg = this.currentItem.images[index];
  }

}
