console.log("sanity check");
//have deck of 52 cards
// console.log(cards)

//start game
//print welcome to war game
console.log("Welcome to Game of War! ");
alert("Welcome to Game of War! You will be dealt 26 cards, and you will choose the top card of each deck. The player with the higher value card wins a point. Players play until cards run out! Please press 'OK' to enter")
//state variables
let winner;

//cache variables

let playerDeck = document.getElementById("playerDealtCards");
let playerPlayingCard = document.getElementById("playerPlayingCard");

let cpuDeck = document.getElementById("cpuDealtCards");
let cpuPlayingCard = document.getElementById("cpuPlayingCard");

let scoreBoard = document.getElementsByClassName("scoreBoard");
let dealButton = document.getElementById("dealButton");

//
let playerCardImg; // changed the variable to access globally.
let cpuCardImg; // changed the variable to access globally.

const game = {
  //objects for player and CPU
  player: {
    dealtCards: [],
    score: 0,
    usedCards: [],
    roundsWon: 0
  },
  //objects for CPU
  CPU: {
    dealtCards: [],
    score: 0,
    usedCards: [],
    roundsWon: 0
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
    console.log("This is the split deal function!", cards.length / 2 - 1);
    for (let i = 0; i < 26; i++) {
      this.player.dealtCards.push(cards.pop());
      this.CPU.dealtCards.push(cards.pop());
      // console.log(cards);
    }

    this.playCard(); // play the first round here to get the game started.

    // this.gameplayLoop()
  },

  // payer clicks on the deck in order to choose the last card on the array of 26 cards
  //cpu clicks on the deck in order to choose the last card on the array of 26 cards

  //onclick run playCard()
  //take out of gameplayloop()

  //prints to array
  playCard: function(card) {
    //deal out last card
    let playerLastCard = this.player.dealtCards.pop();
    let CPULastCard = this.CPU.dealtCards.pop();
    // console.log(`player card: ${playerLastCard.name}`); //
    // console.log(`CPU Card: ${CPULastCard.name}`);

    console.log("Compare values!");
    this.compareCards(playerLastCard, CPULastCard);
  },

  //figure out which card has higher value
  compareCards: function(playerCard, CPUCard) {
    // addEventListener('click')
    // Handle a tie  (ie. start a "War Round")
    let playerWarCards;
    let CPUWarCards;
    if (playerCard.value === CPUCard.value) {
      // message.textContent = "GO TO WAR!!!!"//errors
      console.log(this.player.dealtCards);
      console.log("WAR!!!!!!!!!!!!!!!!!!!");
      if (this.player.dealtCards.length > 4) {
        console.log(this);
        this.player.dealtCards.pop();
        this.player.dealtCards.pop();
        this.player.dealtCards.pop();
        playerWarCards = this.player.dealtCards.pop();
        this.CPU.dealtCards.pop();
        this.CPU.dealtCards.pop();
        this.CPU.dealtCards.pop();
        CPUWarCards = this.CPU.dealtCards.pop();

        console.log(
          `THESE ARE THE WAR CARDS: ${playerWarCards}, ${CPUWarCards}`
        );
        if (playerWarCards.value > CPUWarCards.value) {
          console.log("You win 5 points ");
          this.player.score += 5;
        } else {
          console.log("You lost the war");
          this.CPU.score += 5;
        }
      } else if (this.player.dealtCards.length > 0) {
        playerWarCards = this.player.dealtCards.pop();
        console.log("You win 5 points ");
        this.player.score += 5;
        CPUWarCards = this.CPU.dealtCards.pop();
        console.log("You lost the war");
        this.CPU.score += 5;
      }

      // if CPU wins the hand
    } else if (playerCard.value < CPUCard.value) {
      console.log("oh no!");
      this.CPU.score++;
      // if Player wins the hand
    } else if (playerCard.value > CPUCard.value) {
      console.log("You're doing great!");
      this.player.score++;
      // console.log(this.player.score)
    }
    console.log(`player: ${this.player.score} , CPU:${this.CPU.score}`);

    document.getElementById(
      "player1Score"
    ).innerHTML = `Player Score: ${this.player.score}`;
    document.getElementById(
      "cpuScore"
    ).innerHTML = `Computer Score: ${this.CPU.score}`;

    if (playerCardImg) {
      // check if the playerCardImg exists. it will not exist until the DOM renders.
      playerCardImg.src = `../cardInfo/CardImg/${playerCard.img}`; // change the src of the image to the current playerCard
    }
    if (cpuCardImg) {
      // check if the cpuCardImg exists. it will not exist until the DOM renders.
      cpuCardImg.src = `../cardInfo/CardImg/${CPUCard.img}`; // change the src of the image to the current CPUCard
    }
  },

  //game will run til players run out of cards
  // endGame: function() {
  //   while (game.player.dealtCards.length > 0) {
  //     this.gameplayLoop();
  //     //get gamelop func and tie to a button only run when button is clicked
  //   }
  // },

  // when game ends, the player with t
  winner: function() {
    if (this.player.score > this.CPU.score) {
      console.log(` You win!!!`);
      alert(` You win!!!`); // show an alert to the window so the user knows the game ended.

    } else {
      console.log(`Im Sorry, The computer won. Better luck next time!!`);
      alert(`Im Sorry, The computer won. Better luck next time!!`); // show an alert to the window so the user knows the game ended.
    }
  },


  init: function() {
    console.log(
      "Welcome to Game of War! You will be dealt 26 cards, and you will choose the top card of each deck. The player with the higher value card wins a point. Players play until cards run out!"
    );
    this.shuffle(cards);
    this.splitDeal(cards);

    let gameObject = this; // save the game object (which contains all our logic and players) into a new variable.	
    document.getElementById("playerDealtCards").addEventListener("click", function() {	
      // inside the event listener, when the player clicks the card, the variable "this" changes to refer to the <div> the player just clicked.	
      // for example, if we wanted to get the player's dealtCards we would use gameObject.player.dealtCards instead of this.player.dealtCards	
      // we only have to do this weird stuff inside the event listeners.	
      if (gameObject.player.dealtCards.length === 0 || gameObject.CPU.dealtCards.length === 0 ) {	
        gameObject.winner();	
      } else {	
        gameObject.playCard();	
      }	
    });


    //     //event listener
    // dealButton = document.getElementById('dealButton');
    // dealButton.button.eventListener('click', dealCardsButton);



    function dealCardsButton() {}

    //3 buttons and 3 event listeners to run those 3 functions
    //adds a background image to the player dealt cards deck and adds the first card in hand  array
    playerCardImg = document.createElement("img");//im not using const or let because I set as global variable
    let playerCardBackground = document.createElement("img");
    playerCardImg.src = `../cardInfo/CardImg/${this.player.dealtCards[0].img}`;
    playerCardImg.className = "cardback";
    playerCardBackground.className = "cardback";
    playerCardBackground.src = `../cardInfo/CardImg/cardBackgroundImg.png`;
    playerPlayingCard.appendChild(playerCardImg);
    playerDealtCards.appendChild(playerCardBackground);

    //adds a background Image to the CPU dealt cards deck and adds the first cand in hadn array

     cpuCardImg = document.createElement("img");//im not using const or let because I set as global variable
    let cpuCardBackground = document.createElement("img");
    cpuCardImg.src = `../cardInfo/CardImg/${
      this.CPU.dealtCards[this.CPU.dealtCards.length - 1].img
    }`;
    console.log(cpuCardImg);
    cpuCardImg.className = "cardback";
    cpuCardBackground.className = "cardback";
    cpuCardBackground.src = `../cardInfo/CardImg/cardBackgroundImg.png`;
    cpuPlayingCard.appendChild(cpuCardImg);
    cpuDealtCards.appendChild(cpuCardBackground);

    // cpuDeck;
  },
  gameplayLoop: function() {
    console.log(this.player.dealtCards);
    console.log(this.CPU.dealtCards);
    this.playCard();

    // this.winner()
  }
};

game.init();
// game.gameplayLoop()
// game.endGame();
// game.winner();//only call this when the game ends

// resetButton= document.getElementById('resetButton');
// resetButton.addEventListener('click', gameRestart);

function gameRestart() {
  game.init();
  game.gameplayLoop();
  game.player.score = 0;
  game.CPU.score = 0;
}

// WAR SCENARIO
// if there's at least 4 cards left in the deck:
// remove 3 cards, and then compare the 4th card
// 3x pop()s,---- or a splice that removes 3 elements, followed by a pop that saves to variable
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
