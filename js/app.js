console.log("sanity check");
//have deck of 52 cards
// console.log(cards)

//start game
//print welcome to war game
console.log("Welcome to Game of War! ");

const game = {
  //objects for player and CPU
  player: {
    dealtCards: [],
    score: 0,
    usedCards: []
  },
  //objects for CPU
  CPU: {
    dealtCards: [],
    score: 0,
    usedCards: []
  },

  currentRound: 1,
  maxround: 5,

  //shuffle cards
  shuffle: function(array) {
    console.log("This is the shuffle function");

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(cards);
  },

  // deal 26 cards to each player
  splitDeal: function() {
    console.log("This is the split deal function!");
    for (let i = 0; i < 26; i++) {
      this.player.dealtCards.push(cards.pop());
      this.CPU.dealtCards.push(cards.pop());
      // console.log(cards[i]);
    }
  },

  // payer clicks on the deck in order to choose the last card on the array of 26 cards
  //cpu clicks on the deck in order to choose the last card on the array of 26 cards

  //prints to array
  playCard: function(card) {
    //deal out last card
    let playerLastCard = this.player.dealtCards.pop();
    let CPULastCard = this.CPU.dealtCards.pop();
    console.log(`player card: ${playerLastCard.name}`); //
    console.log(`CPU Card: ${CPULastCard.name}`);

    console.log("Compare values!");
    this.compareCards(playerLastCard, CPULastCard);
  },

  //figure out which card has higher value
  compareCards: function(playerCard, CPUCard) {
    if (playerCard === CPUCard) {
      console.log("Time to Battle!!!");
    } else if (playerCard < CPUCard) {
      this.CPU.usedCards.push(playerCard && CPUCard);
      console.log("oh no!");
    } else if (playerCard > CPUCard) {
      this.player.usedCards.push(playerCard && CPUCard);
      console.log("You're doing great!");
    }
  },

  gameplayLoop: function() {
    this.shuffle(cards);
    this.player.dealtCards;
    this.CPU.dealtCards;
    this.playCard();
    // console.log(cards);
  }
};
// console.log(game.shuffle(cards))
game.shuffle(cards);
game.splitDeal(cards);
// console.log(game.player.dealtCards);
console.log(game.CPU.dealtCards);
// console.log(game.player);

game.playCard();

//the card with highest value will will both cards and put them in another array (used cards)
//*******show the player whether they won or lost that round and the score
//get rid of both played cards
//play again until both players put a card of same value.
// each player will click 4 times. On the 4th card, the cards will be compared
//card with highest value wins all 10 cards and puts them into their array of used cards
//play again until 5 wars have occurred
//compare scores and tell player if they won or lost
//ask player if they want to play again
//player can continue until all cards are gone or 5 rounds
//reset game
