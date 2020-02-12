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
       this.player.score++ && this.CPU.score++;

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
endGame: function(){
  while(game.player.dealtCards.length > 0){
    this.gameplayLoop()
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
    // this.compareCards()
    // console.log(cards);
  }
};
// console.log(game.shuffle(cards))
game.init()
game.endGame()
// game.gameplayLoop()

// console.log(game.player.dealtCards);
// console.log(game.CPU.dealtCards);
// console.log(game.player);

// game.playCard();

//if 
// 1. init function- shuffle(), splitDeal() cand calls gameplayLoop()
// 2. gameplayLoop()- remove shuffle() and splitDeal(),
//add playCard() , by default, play the last card on the array

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
