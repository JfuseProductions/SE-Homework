/* 0: CONNECT ELEMENTS TO HTML  and VARIABLE DECLARATIONS*/
const message = document.querySelector('.message');
const button = document.querySelectorAll('button');
const gameplay = document.querySelector('.gameplay');
const userPlay = document.querySelector('.userPlay');
const response = document.querySelector('.res');


/*Event Listener for all the buttons using For Loops*/
button.forEach(function(item) {
  item.addEventListener('click', playGame);
})


/*FUNCTION to START THE GAME*/
function playGame(e) {                                                          // event object as a parameter in function play game
  let temp = e.target.textContent;                                            
 
  if (temp === 'Start' || temp === 'start')                                     // if the button clicked was 'START' than the game will START
  {   
    btnRender();
    startGame();
  }
}


/*HIDE START BUTTON IF GAME HAS STARTED AND SHOW IF GAME HAS ENDED*/ //569
btnRender = () => {
  button[0].classList.toggle('hide');                                           // remove start button
  button[1].classList.toggle('hide')                                            // add start button
}

/*  */
startGame = () => {
  let numberPlayers = document.querySelector('input').value;                    // user inputs into the game- accessed using value method on the DOM
  getDeck();                                                                    // calls function to create deck of cards
  setupPlayers(numberPlayers);                                                  // uses number of players inputed from line 44 as a parameter
  dealCards(0);                                                                 // function with parameter of 0 to deal cards to first player within ARRAy(PLAYER 1)
  console.log(deck);
  document.querySelector('input').value = '1';                                  
}

let deals = []; //EMPTY ARRAY DEALS OUT THE CARDS TO PLAYERS based on how much players are there
/*FUNCTION to DEAL out the cards to the play*/
dealCards = playerCard => {
  playerCard = (playerCard >= players.length)? 0                                           //IF VALUE IS > ARRAY OF Player Num input: reset to first player
    playerCard;
    console.log(playerCard);
    if (deck.length > 0){                                                                  // as long as it is greater than zero: CARDS will be dealt to players
      let shuffle = Math.floor(Math.random()*deck.length);
    }
    else{
      message.textContent = "cards dealt now"; // WILL DISPLAY this message after card length reaches zero
      return;
    }
}


/* creates players to know how much cards to pass out*/
let players = new Array; //Global variable of EMPTY array for players
setupPlayers = num => {

  players = [];
    deals = [];

  for (let x = 0; x < num; x++) {

  let div = document.createElement('div');                                                           // create div elements for each player (WILL ALWAYS BE 2 or 4)
    div.setAttribute('id', `player ${x+1}`);                                                         //set id attribute to each div element of player number (PLAYER 1,PLAYER 2)
      
      div.classList.add('player');                                                                  //add classes to the created div elements(classes will be styled with CSS)
    let div1 = document.createElement('div');                                                       //Area for card and card INFO
      div1.textContent = `Player ${x+1}`;
    players[x] = document.createElement('div');                                                     // Gives ability to access across different functions
      players[x].textContent = 'Card Stack';                                                        //CARDS will be placed
    div.appendChild(div1); //
      div.appendChild(players[x]);                                                                  //Appended to parent
        gameplay.appendChild(div);                                                                  //append the created div to gameplay element in html
    deals.push([]);                                                                                
      console.log(deals);
        console.log(div);
  }
}



/* DECK OF CARDS CREATION */

let suit = ['spades', 'hearts', 'diamonds', 'clubs'];                                                           //4 different sets for 13 numbers
  let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];                          //13 numbers
    let deck = new Array;                                                                                       // EMPTY ARRAY TO ADD OBJECTS of key value pairs


/* ITERATION TO create objects corresponding to the values and suits */
let getDeck = () => {

  for (let i = 0; i < suit.length; i++) {                                                                       //iterate as long as i is less than 4
    for (let j = 0; j < cardValues.length; j++) {                                                               //iterate as long as j is less than 13
      let card = {                                                                                              //objects => number/letter, symbol/suit and ranking.
        cardValue: cardValues[j],
        suit: suit[i],
        cardRank: (j + 1)
      };
      deck.push(card); 
    }
  }
  return deck;                                                                                                  //[{cardValue:'A', suit: 'spades', cardRank: 13}]
}
