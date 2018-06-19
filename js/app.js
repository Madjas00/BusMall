'use strict';

var nextImage = 0;
//Function for Displaying Images
function displayImages() {
    var image1 = Item.all [nextImage++];
    var img1 = document.getElementById('item-1');
    img1.src = image1.src;

    var image2 = Item.all [nextImage++];
    var img2 = document.getElementById('item-2');
    img2.src = image2.src;

    var image3 = Item.all [nextImage++];
    var img3 = document.getElementById('item-3');
    img3.src = image3.src;
    

}


var itemImages = document.querySelectorAll('#vote img');

for(var i=0; i < itemImages.length; i++  ) {
    itemImages[i].addEventListener('click',function(event){
        console.log('click' ,event.target);

        displayImages();
    });
}

//Setting up Object Constructor Function
function Item (name,src) {
    this.name = name;
    this.src = src;

    Item.all.push(this);

}

Item.all = [];
//Objects Created
new Item('R2-D2 Bag', 'img/bag.jpg');
new Item('Dog Duck', 'img/dog-duck.jpg');
new Item('Meatball Bubble Gum', 'img/bubblegum.jpg');
new Item('Cthulhu', 'img/cthulhu.jpg');
new Item('Dragon Meat', 'img/dragon.jpg');
new Item('Modern Chair', 'img/chair.jpg');
new Item('Toilet Tablet', 'img/bathroom.jpg');
new Item('Banana Peeler', 'img/banana.jpg');
new Item('Boots', 'img/boots.jpg');

window.addEventListener('load', displayImages);
console.log(Item.all);


