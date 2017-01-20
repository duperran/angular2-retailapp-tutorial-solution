import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
   items: Item[];
   constructor() {

     this.items = [
       { id: '1', name: 'Barrel Bag', price: '42.30$',
             description: 'Sometimes days come along where you have to carry around more luggage than you\'d like,' +
                          'so we have this Navagia Barrel Bag to make sure you enjoy it as much as you can. A canvas main body,' +
                          'Synthetic Suede trim and multi-coloured insides combined with a large main compartment,' +
                          'mini front pouch and adjustable strap make this bag the perfect choice for any occasion.' +
                          '100% Polyester.',
    	       thumbnail: ['assets/img/barrel_bag/medium/barrel_bag1.jpg',
    	                   'assets/img/barrel_bag/medium/barrel_bag2.jpg',
    	                   'assets/img/barrel_bag/medium/barrel_bag3.jpg'],
    	       images: ['assets/img/barrel_bag/large/barrel_bag1.jpg',
    	                'assets/img/barrel_bag/large/barrel_bag2.jpg',
    	                'assets/img/barrel_bag/large/barrel_bag3.jpg']
        },
        { id: '2', name: 'Barrel Bag Navy/White', price: '29.80$',
             description: 'Pack up your troubles in your old kit bag. Save your nice new Google bag for your favourite items.' +
                          ' With a detachable shoulder strap for when your load is particularly bulky,' +
                          'and with a zippered pouch pocket for your small items. Screened with the white Google logo',
             thumbnail: ['assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_1.jpg',
                         'assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_2.jpg',
                         'assets/img/barrel_bag_navy_white/medium/barrel_bag_nw_3.jpg'],
             images: ['assets/img/barrel_bag_navy_white/large/barrel_bag_nw_1.jpg',
                      'assets/img/barrel_bag_navy_white/large/barrel_bag_nw_2.jpg',
                      'assets/img/barrel_bag_navy_white/large/barrel_bag_nw_3.jpg']
        },
        { id: '3', name: 'Executive Shoulder Bag', price: '111.75$',
             description: 'Carry your laptop in style with this smart shoulder bag. Features a zipped and padded main compartment,' +
                          'suitable for most 14" laptops as well as a detachable padded shoulder pad. Styled with imitation suede detail' +
                          ' and zip pulls, complementing the leather effect badge with Google logo.',
             thumbnail: ['assets/img/exec_shoulder_bag/medium/exec_bag_1.jpg',
                         'assets/img/exec_shoulder_bag/medium/exec_bag_2.jpg',
                         'assets/img/exec_shoulder_bag/medium/exec_bag_3.jpg'],
             images: ['assets/img/exec_shoulder_bag/large/exec_bag_1.jpg',
                      'assets/img/exec_shoulder_bag/large/exec_bag_2.jpg',
                      'assets/img/exec_shoulder_bag/large/exec_bag_3.jpg']
        },
        { id: '4', name: 'Patagonia Arbour Bag', price: '111.75$',
             description: 'If you\'re always on your travels then you need a good backpack to accompany you.' +
                          'There\'s no better choice than our Patagonia Arbor Backpack.' +
                          'With a 26L capacity and a large flap to enclose the main compartment it holds ' +
                          'anything you could want to carry with you when you\'re out exploring the big wide world,' +
                          ' even your laptop if you happen to find yourself in an internet cafe for a little break.',
             thumbnail: ['assets/img/patagonia_bag/medium/pata_bag_1.jpg',
                         'assets/img/patagonia_bag/medium/pata_bag_2.jpg',
                         'assets/img/patagonia_bag/medium/pata_bag_3.jpg'],
             images: ['assets/img/patagonia_bag/large/pata_bag_1.jpg',
                      'assets/img/patagonia_bag/large/pata_bag_2.jpg',
                      'assets/img/patagonia_bag/large/pata_bag_3.jpg']
        },
        { id: '5', name: 'Affinity Pet Bag', price: '51.40$',
             description: 'Ease your back and your environmental conscience with this laptop backpack made from 100% recycled polyester.' +
                          'Features a padded laptop compartment compatible with laptops up to 15.6”, media pocket and headphone port, ' +
                          'padded back and shoulder straps. Branded with Google leather badge on the right side.' +
                          'Measures 30 x 44 x21cm ' +
                          'Capacity 15 litres',
             thumbnail: ['assets/img/pet_bag/medium/pet_bag_1.jpg',
                         'assets/img/pet_bag/medium/pet_bag_2.jpg',
                         'assets/img/pet_bag/medium/pet_bag_3.jpg'],
             images: ['assets/img/pet_bag/large/pet_bag_1.jpg',
                      'assets/img/pet_bag/large/pet_bag_2.jpg',
                      'assets/img/pet_bag/large/pet_bag_3.jpg']
        },
        { id: '6', name: 'Youtube Black Cotton Shopper', price: '2.98$',
             description: 'Youtube Black Cotton Shopper',
             thumbnail: ['assets/img/yt_bag/medium/yt_bag_1.jpg',
                         'assets/img/yt_bag/medium/yt_bag_2.jpg',
                         'assets/img/yt_bag/medium/yt_bag_3.jpg'],
             images: ['assets/img/yt_bag/large/yt_bag_1.jpg',
                      'assets/img/yt_bag/large/yt_bag_2.jpg',
                      'assets/img/yt_bag/large/yt_bag_3.jpg']
        },
    	];
     }

  getItems(): Item[] {
      return this.items;
  }

  getItem(id): Item {
  	return this.items.filter(function(item){
        return item.id == id;
  	})[0];
  }
}
