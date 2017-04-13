var deck = [
  { number: 1, suit: 'spades' },
  { number: 2, suit: 'spades' },
  { number: 3, suit: 'spades' },
  { number: 4, suit: 'spades' },
  { number: 5, suit: 'spades' },
  { number: 6, suit: 'spades' },
  { number: 7, suit: 'spades' },
  { number: 8, suit: 'spades' },
  { number: 9, suit: 'spades' },
  { number: 10, suit: 'spades' },
  { number: 11, suit: 'spades' },
  { number: 12, suit: 'spades' },
  { number: 13, suit: 'spades' },
  { number: 1, suit: 'diamonds' },
  { number: 2, suit: 'diamonds' },
  { number: 3, suit: 'diamonds' },
  { number: 4, suit: 'diamonds' },
  { number: 5, suit: 'diamonds' },
  { number: 6, suit: 'diamonds' },
  { number: 7, suit: 'diamonds' },
  { number: 8, suit: 'diamonds' },
  { number: 9, suit: 'diamonds' },
  { number: 10, suit: 'diamonds' },
  { number: 11, suit: 'diamonds' },
  { number: 12, suit: 'diamonds' },
  { number: 13, suit: 'diamonds' },
  { number: 1, suit: 'hearts' },
  { number: 2, suit: 'hearts' },
  { number: 3, suit: 'hearts' },
  { number: 4, suit: 'hearts' },
  { number: 5, suit: 'hearts' },
  { number: 6, suit: 'hearts' },
  { number: 7, suit: 'hearts' },
  { number: 8, suit: 'hearts' },
  { number: 9, suit: 'hearts' },
  { number: 10, suit: 'hearts' },
  { number: 11, suit: 'hearts' },
  { number: 12, suit: 'hearts' },
  { number: 13, suit: 'hearts' },
  { number: 1, suit: 'clubs' },
  { number: 2, suit: 'clubs' },
  { number: 3, suit: 'clubs' },
  { number: 4, suit: 'clubs' },
  { number: 5, suit: 'clubs' },
  { number: 6, suit: 'clubs' },
  { number: 7, suit: 'clubs' },
  { number: 8, suit: 'clubs' },
  { number: 9, suit: 'clubs' },
  { number: 10, suit: 'clubs' },
  { number: 11, suit: 'clubs' },
  { number: 12, suit: 'clubs' },
  { number: 13, suit: 'clubs' }
];

$( document ).ready( function(){

  // draw from bottom
  $('#drawCardFromBottom').on('click', function() {
    console.log('drawCardFromBottom');
    clearTable();
    $('#allCards').append("<div class='card " + deck[ deck.length-1 ].suit + "' data-number='" + deck[ deck.length-1 ].number + "'>" + deck[ deck.length-1 ].number + "</div>");
  }); // drawCardFromBottom

// draw from top
  $( '#drawCardFromTop' ).on( 'click', function(){
    console.log( 'in drawCardFromTop');
    console.log( 'first card:', deck[0]);
    // empty allCards
    clearTable();
    // append to allCards this card
    $( '#allCards' ).append( "<div class='card " + deck[0].suit + "' data-number='" + deck[0].number + "'>" + deck[0].number + "</div>" );
  }); // end drawCardFromTop

  // draw a random card
  $( '#drawRandomCard' ).on( 'click', function(){
    console.log( 'drawRandomCard');
    // get random # between 0 and deck.length - 1
    var rando = Math.random() * ( deck.length );
    var rambo = Math.floor( rando );
    clearTable();
    $( '#allCards' ).append( "<div class='card " + deck[rambo].suit + "' data-number='" + deck[rambo].number +
    "' data-suit='" + deck[rambo].suit + "'>" + deck[rambo].number + "</div>" );
  }); // end drawRandomCard

  // hide all cards
  $( '#hideAll' ).on( 'click', function(){
      console.log( 'in hideAll');
      clearTable(); // function from below
    }); // end hideAll

  // show deck
  $('#showDeck').on('click', function(){
    console.log('showDeck');
    clearTable();
    // loop through deck
    for (var i = 0; i < deck.length; i++) {
      $( '#allCards' ).append( "<div class='card " + deck[i].suit + "' data-number='" + deck[i].number + "' data-suit='" + deck[i].suit + "'>" + deck[i].number + "</div>" );
    }
  }); // end showDeck

  // shuffle the deck
  $('#shuffleDeck').on('click', function(){
    console.log('shuffleDeck');
    clearTable();
    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
      $('#allCards').append("<div class='card " + deck[i].suit + "' data-number='" + deck[i].number + "' data-suit='" + deck[i].suit + "'>" + deck[i].number + "</div>");
    }
  }); // end shuffleDeck

  // click on card
  $(document).on('click', '.card', function(){
    console.log('click on a card');
    console.log('clicked on:', $(this).data('number'), 'of', $(this).data('suit')); //refers to data-number in Html
  }); // end click on card


}); // end doc ready




var clearTable = function(){
  console.log( 'in clearTable' );
  // empty allCards by id
  $( '#allCards' ).empty();
}; // end clearTable
