import { Injectable } from '@angular/core';
import { Item } from '../models/item'

@Injectable()
export class ItemService {

  items: Item[];

  constructor() { 
 
     this.items = [{id: '1', name: 'Barrel Bag', price: '42.30$', 
         description: 'Sometimes days come along where you have to carry around more luggage than you\'d like,'+ 
                      'so we have this Navagia Barrel Bag to make sure you enjoy it as much as you can. A canvas main body,'+
                      'Synthetic Suede trim and multi-coloured insides combined with a large main compartment,'+
                      'mini front pouch and adjustable strap make this bag the perfect choice for any occasion.'+
                      '100% Polyester.',
         thumbnail: ['assets/img/barrel_bag/medium/barrel_bag1.jpg',
                     'assets/img/barrel_bag/medium/barrel_bag2.jpg',
                     'assets/img/barrel_bag/medium/barrel_bag3.jpg'],
         images: ['assets/img/barrel_bag/large/barrel_bag1.jpg',
                  'assets/img/barrel_bag/large/barrel_bag2.jpg',
                  'assets/img/barrel_bag/large/barrel_bag3.jpg']            
    },
    {id: '2', name: 'Barrel Bag Navy/White', price: '29.80$',
         description: 'Pack up your troubles in your old kit bag. Save your nice new Google bag for your favourite items.'+
                      ' With a detachable shoulder strap for when your load is particularly bulky,'+ 
                      'and with a zippered pouch pocket for your small items. Screened with the white Google logo', 
         thumbnail: ['assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_1.jpg',
                     'assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_2.jpg',
                     'assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_3.jpg'],
         images: ['assets/img/barrel_bag_navy_white/large/barrel_bag_nw_1.jpg',
                  'assets/img/barrel_bag_navy_white/large/barrel_bag_nw_2.jpg',
                  'assets/img/barrel_bag_navy_white/large/barrel_bag_nw_3.jpg']            
    }];

  }

  getItems(): Item[] {

  	 return this.items;
  }

}
