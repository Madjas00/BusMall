'use strict';

var nextImage = 0;
var voteCount = 0;
//Function for Displaying Images
function displayImages() {
    
    if (voteCount === 25){
        console.log('display results');
        return;

    }
    var image1 = Item.all [randomIntFromInterval(0,8)];
    var img1 = document.getElementById('item-1');
    img1.src = image1.src;

    var image2 = Item.all [randomIntFromInterval(0,8)];
    var img2 = document.getElementById('item-2');
    img2.src = image2.src;

    var image3 = Item.all [randomIntFromInterval(0,8)];
    var img3 = document.getElementById('item-3');
    img3.src = image3.src;
    

}

//Function for choosing random number
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//click event for changing Images
var itemImages = document.querySelectorAll('#vote img');



for(var i=0; i < itemImages.length; i++  ) {
    
    itemImages[i].addEventListener('click',function(event){
        console.log('click' ,event.target);
        voteCount++;
        console.log(voteCount);

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
new Item('All-in-one Breakfast Maker', 'img/breakfast.jpg');
new Item('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new Item('Unicorn Meat', 'img/unicorn.jpg');
new Item('Tentacle USB', 'img/usb.gif');
new Item('Baby Sweeper', 'img/sweep.png');
new Item('Self Watering Can', 'img/water-can.jpg');


window.addEventListener('load', displayImages);
console.log(Item.all);


