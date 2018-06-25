/*globals Chart */
'use strict';


//Local Storage

function saveAll() {
    localStorage['voteHistory'] = JSON.stringify({voteCount});
    localStorage['items'] = JSON.stringify(Item.all);
}


function getFromStorage() {
    var jsonVoteHistoryString = localStorage['voteHistory'];
    if (jsonVoteHistoryString){
       var voteHistory = JSON.parse(jsonVoteHistoryString);
       voteCount = voteHistory.voteCount;
       console.log(voteCount);
    }
    var fromStorage = localStorage['items'];
    if (!fromStorage)
    return;
   var objects = JSON.parse(fromStorage);
   
   for(var i = 0; i< objects.length; i++) {
       var objects = objects[i];
     new Item(objects.name, objects.src, objects.voteCount, objects.showCount);
   }
   console.log(Item.all);
   
}
var nextImage = 0;
var voteCount = 0;

//Function for Displaying Images
function displayImages() {
    
    if (voteCount === 25){
        console.log('display results');
        showResults();
        
        return;

    }
    var image1 = Item.all [randomIntFromInterval(0,4)];
    image1.showCount++;
    var img1 = document.getElementById('item-1');
    img1.src = image1.src;
    img1.currentItem = image1;

    var image2 = Item.all [randomIntFromInterval(5,9)];
    image2.showCount++;
    var img2 = document.getElementById('item-2');
    img2.src = image2.src;
    img2.currentItem = image2;

    var image3 = Item.all [randomIntFromInterval(10,14)];
    image3.showCount++;
    var img3 = document.getElementById('item-3');
    img3.src = image3.src;
    img3.currentItem = image3;
    

}



var productImages = document.querySelectorAll('#vote img');
for(var i = 0; i <productImages.length; i++) {
    productImages[i].addEventListener('click', function (event) {
        voteCount++;

        event.target.currentItem.voteCount ++;
        displayImages();
    });
}

//Function for choosing random number
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//click event for changing Images


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
function initializeItems(){
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

saveAll();
}



//Randomize Votes and Show Counts. Removed because vote count was somtimes higher that show count.
// for (var i = 0; i < Item.all.length; i++) {
//     Item.all[i].voteCount = Math.floor(Math.random() * 50);
//     Item.all[i].showCount = Math.floor(Math.random() * 100);
// }

window.addEventListener('load', function onLoad() {
    getFromStorage();

    if(Item.all.length === 0) {
        initializeItems();
    }

    
    displayImages();
});

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
                backgroundColor: '#F694C1',
                data: countVotes,

            },
            {
               label: 'Show Count',
               backgroundColor: '#de5eff',
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

