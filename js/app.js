//start game
console.log("Welcome to Game of War! ");
alert(
  "Welcome to Game of War! You will be dealt 26 cards, and you will choose the top card of each deck. The player with the higher value card wins a point. Players play until cards run out! Please press 'OK' to enter"
);
//state variables
let winner;

//cache variables
let playerDeck = document.getElementById("playerDealtCards");
let playerPlayingCard = document.getElementById("playerPlayingCard");

let cpuDeck = document.getElementById("cpuDealtCards");
let cpuPlayingCard = document.getElementById("cpuPlayingCard");

let scoreBoard = document.getElementsByClassName("scoreBoard");
let dealButton = document.getElementById("dealButton");

let playerCardImg; // changed the variable to access globally.
let cpuCardImg; // changed the variable to access globally.

let playerCurrentDealtCard; //global object to removeChild
let cpuCurrentDealtCard;

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
  },

  // deal 26 cards to each player
  splitDeal: function() {
    console.log("This is the split deal function!", cards.length / 2 - 1);
    this.player.dealtCards = cards.splice(0, 26);
    this.CPU.dealtCards = cards;
  },

  //prints to array
  playCard: function(card) {
  //deal out last card
    let playerLastCard = this.player.dealtCards.pop();
    let CPULastCard = this.CPU.dealtCards.pop();

    playerCardImg = document.createElement("img"); 
    playerCardImg.src = `../cardInfo/cardImg/${playerLastCard.img}`;
    playerCardImg.className = "cardback";
    if (playerCurrentDealtCard) {
      playerPlayingCard.removeChild(playerCurrentDealtCard);
    }
    playerPlayingCard.appendChild(playerCardImg);
    playerCurrentDealtCard = playerCardImg;

    //adds a background Image to the CPU dealt cards deck and adds the first cand in hadn array
    cpuCardImg = document.createElement("img"); 
    cpuCardImg.src = `../cardInfo/cardImg/${
      //top card on the deck aka last on the array
      CPULastCard.img
    }`;
    cpuCardImg.className = "cardback";
    if (cpuCurrentDealtCard) {
      cpuPlayingCard.removeChild(cpuCurrentDealtCard);
    }

    cpuPlayingCard.appendChild(cpuCardImg);
    cpuCurrentDealtCard = cpuCardImg;
    // console.log(`player card: ${playerLastCard.name}`);
    // console.log(`CPU Card: ${CPULastCard.name}`);

    console.log("Compare values!");
    this.compareCards(playerLastCard, CPULastCard);
  },
  removeCardsFromWarSpot: function() {
    let card1 = document.getElementById("playerWarCard").lastElementChild;
    if (card1 != null) {
      document.getElementById("playerWarCard").removeChild(card1);
    }
    let card2 = document.getElementById("cpuWarCard").lastElementChild;
    if (card2 != null) {
      document.getElementById("cpuWarCard").removeChild(card2);
    }
  },

  compareCards: function(playerCard, CPUCard) {
    let playerWarCards;
    let CPUWarCards;
    this.removeCardsFromWarSpot();

    if (playerCard.value === CPUCard.value) {
      //check if there are any cards in the war spot
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
        cpuWarCards = this.CPU.dealtCards.pop();

        console.log(
          `THESE ARE THE WAR CARDS: ${playerWarCards.value}, ${cpuWarCards.value}`
        );
        if (playerWarCards.value > cpuWarCards.value) {
          console.log("You win 5 points ");
          this.player.score += 5;
        } else {
          console.log("You lost the war");
          this.CPU.score += 5;
        }
        //faceDown cards
        // - create stand alone dom node
        // - then, add src attribute to it, plus also the 'cardback' class
        // - then select existing dom Node from the dom tree
        // - then append the Img dom node to the warCard container
        playerWarImg = document.createElement("img");
        playerWarImg.src = `../cardInfo/CardImg/${playerWarCards.img}`;
        playerWarImg.classList.add("cardback");
        playerWarCardContainer = document.getElementById("playerWarCard");
        playerWarCardContainer.appendChild(playerWarImg);

        cpuWarImg = document.createElement("img");
        cpuWarImg.src = `../cardInfo/CardImg/${cpuWarCards.img}`;
        cpuWarImg.classList.add("cardback");
        cpuWarCardContainer = document.getElementById("cpuWarCard");
        cpuWarCardContainer.appendChild(cpuWarImg);

        /************************************************ */
        //in the dom find the 2 war card ids and append image tag with src value
        //example: document.getElementById('cpuWarCard').append('<img src=../cardInfo/CardImg/${playerWarCards.img}/>')
        //*********************************************** */
      } else if (this.player.dealtCards.length > 0) {
        console.log(this);
        playerWarCards = this.player.dealtCards.pop();
        CPUWarCards = this.CPU.dealtCards.pop();

        if (playerWarCards.value > CPUWarCards.value) {
          console.log("You win 5 points ");
          this.player.score += 5;
        } else {
          console.log("You lost the war");
          this.CPU.score += 5;
        }
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
    // --------------------------
    if (playerCardImg) {
      // check if the playerCardImg exists. it will not exist until the DOM renders.
      playerCardImg.src = `../cardInfo/CardImg/${playerCard.img}`; // change the src of the image to the current playerCard
    }
    if (cpuCardImg) {
      // check if the cpuCardImg exists. it will not exist until the DOM renders.
      cpuCardImg.src = `../cardInfo/CardImg/${CPUCard.img}`; // change the src of the image to the current CPUCard
    }
  },

  winner: function() {
    if (this.player.score > this.CPU.score) {
      console.log(` You win!!!`);
      alert(` You win!!!`); // show an alert to the window so the user knows the game ended.
    } else if (this.player.score === this.CPU.score) {
      console.log("It's a tie! Please Play Again! ");
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

    let playerCardBackground = document.createElement("img");
    playerCardBackground.className = "cardback";
    playerCardBackground.src = `../cardInfo/CardImg/cardBackgroundImg.png`;
    playerDealtCards.appendChild(playerCardBackground);

    let cpuCardBackground = document.createElement("img");
    cpuCardBackground.className = "cardback";
    cpuCardBackground.src = `../cardInfo/CardImg/cardBackgroundImg.png`;
    cpuDealtCards.appendChild(cpuCardBackground);
  },

  gameplayLoop: function() {
    console.log(this.player.dealtCards);
    console.log(this.CPU.dealtCards);
    if (this.player.dealtCards.length === 0) {
      this.winner();
      return;
    } else {
      this.playCard();
    }
  }
};

//run game on deal button click
let flag = true;
document.getElementById("dealButton").addEventListener("click", function() {
  if (flag) {
    game.init();
  }
  flag = false;
});
document
  .getElementById("playerDealtCards")
  .addEventListener("click", function() {
    game.gameplayLoop();
  });
function gameRestart() {
}
//TODO:
//create a single class for both CPU and Player decks
//continue breaking down game loop into individual functions
//bind individual functions to correct DOM elements (dealcards on the first player's card)
//work on war if/else condition
//if war, the player card should launch the war functions
//the war results show on the cards display area
//war results play out on area with timed functions instead of running instantly

// for cards
//cards missing css components
//array of Object. specify property and save the value in objects
