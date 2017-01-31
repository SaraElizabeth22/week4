// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  $(".btn").on("click", function(event) {
    console.log(event);
    var cardname1 ="6_of_hearts";
    var card1 = "http://golearntocode.com/images/cards/" + cardname1 + ".png";
$("#c1").attr("src",card1);

  });
});

$(function() {
  $(".btn").on("click", function(event) {
    console.log(event);
    var cardname2 ="10_of_clubs";
    var card2 = "http://golearntocode.com/images/cards/" + cardname2 + ".png";
$("#c2").attr("src",card2);

  });
});

$(function() {
  $(".btn").on("click", function(event) {
    console.log(event);
    var cardname3 ="3_of_diamonds";
    var card3 = "http://golearntocode.com/images/cards/" + cardname3 + ".png";
$("#c3").attr("src",card3);

  });
});

$(function() {
  $(".btn").on("click", function(event) {
    console.log(event);
    var cardname4 ="queen_of_clubs";
    var card4 = "http://golearntocode.com/images/cards/" + cardname4 + ".png";
$("#c4").attr("src",card4);

  });
});

$(function() {
  $(".btn").on("click", function(event) {
    console.log(event);
    var cardname5 ="8_of_spades";
    var card5 = "http://golearntocode.com/images/cards/" + cardname5 + ".png";
$("#c5").attr("src",card5);

  });
});
//Playing around with the below but could not get it to work..//
//$(function() { $(getDeck).on("click", function(event) {    console.log(event);
//var deck = getDeck() $("#deck").Math.round(Math.random * 51) }); //
