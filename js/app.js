'use strict';

//Setting up Object Constructor Function
function Item (name,image) {
    this.name = name;
    this.image = image;

    Item.all.push(this);

}

Item.all = [];

new Item('R2-D2 Bag', '../img/bag.jpg');
new Item('Dog Duck', '../img/dog-duck.jpg');
new Item('Meatball Bubble Gum', '../img/bubblegum.jpg');
new Item('Cthulhu', '../img/cthulhu.jpg');
new Item('Dragon Meat', 'img/dragon.jpg');
new Item('Modern Chair', 'img/chair.jpg');
new Item('Toilet Tablet', 'img/bathroom.jpg');
new Item('Banana Peeler', 'img/banana.jpg');
new Item('Boots', 'img/boots.jpg');

console.log(Item.all);


