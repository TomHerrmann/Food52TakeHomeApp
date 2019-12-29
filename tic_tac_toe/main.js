// VARIABLES

// set mutable currentPlayer variable to dictate which value is placed in a tile
let currentPlayer = 'X';

// create a variable for turns played to declare a tie at 9; 
let turnsPlayed = 0;

// create board cache to keep track of Xs and Os on the board
const boardCache = {
  row1: [null, null, null],
  row2: [null, null, null],
  row3: [null, null, null],
};

// creates an array-like object of all elements in the peices class
// set to a variable for later use
const pieces = document.querySelectorAll('.pieces');

// set newGameButton element to a variable 
const newGameButton = document.querySelector('#new-game-button');

// FUNCTIONS

// ***** SETUP FUNCTIONS *****

// iterate over pieces array, adding event listener to each element
const addPiecesEvent = () => {
  pieces.forEach(elem => elem.addEventListener('click', handleBoardPieceClick))
}

// add event listener to new game button
const addNewGameEvent = () => {
  newGameButton.addEventListener('click', handleNewGameButtonClick)
}

// ***** PLAY FUNCTIONS *****

// incriment turns played
const incrimentTurnsPlayed = () => turnsPlayed++;

// set selected tile to the value who has the currentPlayer
const setBoardPiece = event => event.target.innerHTML = currentPlayer;

// update boardCache obj to eventually declare a winner
const updateBoardCache = event => {
  switch (event.target.id) {
    case 'piece1':
      boardCache.row1[0] = currentPlayer;
      break;
    case 'piece2':
      boardCache.row1[1] = currentPlayer;
      break;
    case 'piece3':
      boardCache.row1[2] = currentPlayer;
      break;
    case 'piece4':
      boardCache.row2[0] = currentPlayer;
      break;
    case 'piece5':
      boardCache.row2[1] = currentPlayer;
      break;
    case 'piece6':
      boardCache.row2[2] = currentPlayer;
      break;
    case 'piece7':
      boardCache.row3[0] = currentPlayer;
      break;
    case 'piece8':
      boardCache.row3[1] = currentPlayer;
      break;
    case 'piece9':
      boardCache.row3[2] = currentPlayer;
      break;
  }
};

// conidtions for winning
const checkScore = () => {
  // Horizontally |
  if (boardCache.row1[0] === currentPlayer && boardCache.row1[1] === currentPlayer && boardCache.row1[2] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };

  if (boardCache.row2[0] === currentPlayer && boardCache.row2[1] === currentPlayer && boardCache.row2[2] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };
  if (boardCache.row3[0] === currentPlayer && boardCache.row3[1] === currentPlayer && boardCache.row3[2] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };

  // Vertically -
  if (boardCache.row1[0] === currentPlayer && boardCache.row2[0] === currentPlayer && boardCache.row3[0] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };
  if (boardCache.row1[1] === currentPlayer && boardCache.row2[1] === currentPlayer && boardCache.row3[1] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };
  if (boardCache.row1[2] === currentPlayer && boardCache.row2[2] === currentPlayer && boardCache.row3[2] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };

  // Diagonally / \
  if (boardCache.row1[0] === currentPlayer && boardCache.row2[1] === currentPlayer && boardCache.row3[2] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };
  if (boardCache.row1[2] === currentPlayer && boardCache.row2[1] === currentPlayer && boardCache.row3[0] === currentPlayer) {
    declareWinner(currentPlayer)
    removePiecesEvent();
  };
};

// create a function to be invoked when a winner is 
const declareWinner = player => {
  // create new h1 to display the winner
  const h1 = document.createElement('h1')
  h1.innerHTML = `${player} WON THE GAME!`
  document.querySelector('#winner').appendChild(h1)
};

// remove event listener to disalbe game functionality when a player wins
const removePiecesEvent = () => {
  pieces.forEach(elem => elem.removeEventListener('click', handleBoardPieceClick))
};

// change current turn to the opposite palyer
const changeTurn = () => {
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
};

// ***** RESET FUNCTIONS *****

// reset current turn to X
const resetPlayer = () => currentPlayer = 'X';

// iterate over the entire pieces class, removing Xs and Os
const resetBoard = () => pieces.forEach(elem => elem.innerHTML = '');

// reset board cache
const resetBoardCache = () => {
  for (let key in boardCache) {
    boardCache[key].forEach((elem, index) => boardCache[key][index] = null)
  }
};

// reset turns played
const resetTurnsPlayed = () => turnsPlayed = 0;

// reset the winner text for new games
const resetWinnerText = () => document.querySelector('#winner').innerHTML = '';

// remove focus from button after click
const resetFocus = () => {
  newGameButton.blur()
}

// EVENT LISTENERS

// use e as event variable in event listener functions to differentiate from modular callbacks 
const handleBoardPieceClick = (e) => {
  // if the selected tile has already been played, return without making changes
  if (e.target.innerHTML) return

  incrimentTurnsPlayed();
  setBoardPiece(e);
  updateBoardCache(e);
  if (turnsPlayed >= 5) checkScore();
  changeTurn();
}

const handleNewGameButtonClick = () => {
  resetPlayer();
  resetBoard();
  resetBoardCache();
  resetTurnsPlayed();
  resetWinnerText();
  resetFocus();
  addPiecesEvent();
}

// Add event listeners to start the game
addPiecesEvent()
addNewGameEvent()