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
    usedCards: [],
    roundsWon: 0,
  },
  //objects for CPU
  CPU: {
    dealtCards: [],
    score: 0,
    usedCards: [],
    roundsWon:0,
    
  },

  currentRound: 1,
  maxround: 3,

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
    if (playerCard.value === CPUCard.value) {
       this.player.dealtCards.splice(-3,0,)
       this.CPU.dealtCards.pop()
       //pop 3 from player po 3 from CPU
       //only save the last one I popped from each one(4th card)
       //

       //winner get 5 points 


      console.log("its a draw.. Both player score! ");
    } else if (playerCard.value < CPUCard.value) {
      console.log("oh no!");
      this.CPU.score++;
     
    } else if (playerCard.value > CPUCard.value) {
      console.log("You're doing great!");
      this.player.score++;
      // console.log(this.player.score)
    }
    console.log(`player: ${this.player.score} , CPU:${this.CPU.score}`)
  },

  //game will run til players run out of cards 
endGame: function(){
  while(game.player.dealtCards.length > 0){
    this.gameplayLoop()
  }
},

// when game ends, the player with t
winner: function(){
if (this.player.score > this.CPU.score){
  console.log(` You win!!!`)
} else {
  console.log(`Im Sorry, The computer won. Better luck next time!!`)
}
},


init: function(){
  console.log('Welcome to Game of War! You will be dealt 26 cards, and you will choose the top card of each deck. The player with the higher value card wins a point. Players play until cards run out!');
  this.shuffle(cards);
  this.splitDeal(cards);
  this.gameplayLoop()
},
  gameplayLoop: function() {
    console.log(this.player.dealtCards);
    console.log(this.CPU.dealtCards);
    this.playCard();
    this.winner()
    
  }
};

game.init()
game.endGame()

//if 
// 1. init function- shuffle(), splitDeal() cand calls gameplayLoop()
// 2. gameplayLoop()- remove shuffle() and splitDeal(),
//add playCard() , by default, play the last card on the array


// WAR SCENARIO
// if there's at least 4 cards left in the deck:
// remove 3 cards, and then compare the 4th card
// 3x pop()s, or a splice that removes 3 elements, followed by a pop that saves to variable
// do the same for the CPU
// compare the player and the CPU's saved card
// save variables to represent the player and CPU cards
// let playerCard;
// let CPUCard;
// do WAR scenario as long as this is true
// while (playerCard === CPUCard && cards.length > 0) {
//   if (there's at least 4 cards in the deck) {
    // remove 3 cards from both player and CPU decks
    // save the 4th card to a variable for each
    // compare them
  // } else {
    // we know there's less than 4 cards in the deck
    // so, we need to check against [0] and [0]
    // we also need to make sure that we remove ALL cards in the array
    // if not, our while loop will never end
    // compare [0] and [0] and then award 5 score to the winner
  // }
// }






  //function that goes to war

    //deal the 4 cards and print 4 
    //store cards in array 
    //2 arrays in war function 



//if i win, push all cards to CPU address
// humanCards = player.dealtCards.splice(4)
// cpuCards = cpu.dealtCards.splice(length - 4 ,4)
//print by index 

//write another compare function
//print value of greate card
// winner gets Pointer
// point gets added to score

// },



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
