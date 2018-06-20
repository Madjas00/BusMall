/*globals Chart */
'use strict';

var nextImage = 0;
var voteCount = 0;
var showCount = 0;
//Function for Displaying Images
function displayImages() {
    
    if (voteCount === 5){
        console.log('display results');
        showResults();
        
        return;

    }
    var image1 = Item.all [randomIntFromInterval(0,4)];
    var img1 = document.getElementById('item-1');
    img1.src = image1.src;

    var image2 = Item.all [randomIntFromInterval(5,9)];
    var img2 = document.getElementById('item-2');
    img2.src = image2.src;

    var image3 = Item.all [randomIntFromInterval(10,14)];
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
function Item (name,src,votes,shows) {
    this.name = name;
    this.src = src;
    this.voteCount = votes || 0;
    this.showCount = shows || 0;

    Item.all.push(this);

}

Item.all = [];
//Objects Created
new Item('R2-D2 Bag', 'img/bag.jpg', 5, 13);
new Item('Dog Duck', 'img/dog-duck.jpg', 4, 9);
new Item('Meatball Bubble Gum', 'img/bubblegum.jpg', 5, 10);
new Item('Cthulhu', 'img/cthulhu.jpg', 2, 11);
new Item('Dragon Meat', 'img/dragon.jpg', 2, 7);
new Item('Modern Chair', 'img/chair.jpg', 6, 12);
new Item('Toilet Tablet', 'img/bathroom.jpg', 2, 9);
new Item('Banana Peeler', 'img/banana.jpg', 6, 13);
new Item('Boots', 'img/boots.jpg', 9, 16);
new Item('All-in-one Breakfast Maker', 'img/breakfast.jpg', 5, 9);
new Item('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 8, 11);
new Item('Unicorn Meat', 'img/unicorn.jpg', 6, 8);
new Item('Tentacle USB', 'img/usb.gif', 9, 13);
new Item('Baby Sweeper', 'img/sweep.png', 10, 18);
new Item('Self Watering Can', 'img/water-can.jpg', 4, 11);

//Randomize Votes and Show Counts
for (var i = 0; i < Item.all.length; i++) {
    Item.all[i].voteCount = Math.floor(Math.random() * 50);
    Item.all[i].showCount = Math.floor(Math.random() * 100);
}


window.addEventListener('load', displayImages);
console.log(Item.all);

function showResults() {
    var ul = document.getElementById('results');
    for(var i = 0; i < Item.all.length; i++) {
        var thisItem = Item.all[i];
        var li = document.createElement('li');
        li.textContent = thisItem.name + ' got ' +thisItem.voteCount + ' votes.';
        ul.appendChild(li);

    }
    showChart();
}

//Show Chart


function showChart() {
    var canvas = document.getElementById('resultsCanvas');
    canvas.style.display = 'block';

    var labels = [];
    var countVotes = [];
    var showCounts = [];
    for (var i = 0; i < Item.all.length; i++) {
       labels[i] = Item.all[i].name;
       countVotes[i] = Item.all[i].voteCount;
       showCounts[i] = Item.all[i].showCount;
       }

    


    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vote Count',
                backgroundColor: 'blue',
                data: countVotes

            },
            {
               label: 'Show Count',
               backgroundColor: 'red',
               data: showCounts,
            }
        ]
        },
        options: {
           responsive: true,
           scales: {
               yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  } 
               }]

           },
            title: {
                display: true,
                text: 'Voting Results'

            }
        }
    });
}
