import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: '[app-item-action]',
  templateUrl: './item-action.component.html',
  styleUrls: ['./item-action.component.css']
})
export class ItemActionComponent implements OnInit {
  @Input() itemId: string;
  elem: ElementRef;
  isFavorite: boolean;

  constructor(el: ElementRef) {
     this.elem = el;
  }


  ngOnInit() {
  }

  setAsFavorite() {
    this.isFavorite = (this.isFavorite) ? false : true;
    console.log(this.itemId + ' is set as favorite ? ' + this.isFavorite);
  }
}
