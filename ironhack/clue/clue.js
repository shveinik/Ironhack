var suspStack ={suspects:  [{name:"Jacob Green", color: "green"},
                            {name:"Doctor Orchid", color: "white"},
                            {name:"Victor Plum", color: "purple"},
                            {name:"Kasandra Scarlet", color: "red"},
                            {name:"Eleanor Peacock", color:"blue" },
                            {name:"Jack Mustard", color: "yellow"} ]};

var weapStack = { weapons:[ {type:"Rope"},
                            {type:"Knife"},
                            {type:"Candlestick"},
                            {type:"Dumbbell"},
                            {type:"Poison"},
                            {type:"Axe"},
                            {type:"Bat"},
                            {type:"Trophy"},
                            {type:"Pistol"} ]};

var roomStack = {  rooms: [ {room:"Dining room"},
                            {room:"Conservatory"},
                            {room:"Kitchen"},
                            {room:"Study"},
                            {room:"Library"},
                            {room:"Billiard room"},
                            {room:"Hall"},
                            {room:"A spa"},
                            {room:"Living room"},
                            {room:"Observatory"},
                            {room:"Theater"},
                            {room:"Guest house"},
                            {room:"A patio"} ]};



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

gameStart = function(){
  var suspect = getRandomInt(0,5);
  var weapon = getRandomInt(0,8);
  var rooms = getRandomInt(0,13);
  return "He was killed by " + suspStack.suspects[suspect].name + " using " + weapStack.weapons[weapon].type + " in " + roomStack.rooms[rooms].room;
};
 gameStart();
