//use a touch event listener to:
//add an X if it is player one turn
//add an O if it is player two turn
//draw line if 3 items line up
//alert "game over"
//include a reset button, to start game over

// const boxTouch = document.querySelector(".token");
// boxTouch.addEventListener(
//   "click",
//   () => {
//     boxTouch.classList.toggle("xTurn")},
//   false
// );
const statusDisplay = document.querySelector('.gameStatus');
//use gameActive to pause game in case of end scenario
let gameActive = true;
//store current player

let currentPlayer = player1Token();
//store game turns in an array, then set values/turns to the array
let gameTurns = ["", "", "", "", "", "", "", "", ""];
//declare some messages
const winningMessage = () => "Player" + currentPlayer + "has won!";
const drawMessage = () => "Game ended in a draw!";
const currentPlayerTurn = () => "It's " + currentPlayer + "'s turn";

//Set initial turn sequence
statusDisplay.innerHTML = currentPlayerTurn();
// function boxPlayed() {}
// function playerChange() {}
// function resultValidation() {}
// function restartGame() {}
// addEventListeners to game cells & restart Button
document.querySelectorAll('.box').forEach(cell => cell.addEventListener("click", cellTouch));
document.querySelector(".restart").addEventListener("click", restartGame);

//check to see if box has been clicked
function cellTouch(cellEvent) {
  //save html element in variable
  const clickedBox = cellEvent.target;
  //get attrubute from the clicked box to identify where that is in the gird
  //will return a string, so we parse it into a number
  const clickedBoxIndex = parseInt(
    clickedBox.getAttribute("data-cell-index"));
  //check if the cell has been played or if the game is paused
  if (gameTurns[clickedBoxIndex] !== "" || !gameActive) {
    return;
  }
  //proceed with game
  boxPlayed(clickedBox, clickedBoxIndex);
  resultValidation();
}
//update game status, and affect game UI
function boxPlayed(clickedBox, clickedBoxIndex) {
  //show move played
  gameTurns[clickedBoxIndex] = currentPlayer;
  //Adds X or O to the box
  clickedBox.innerHTML = currentPlayer;
}

//validate game/turn result
//check if game ended in win, draw or still moves to be played

//starting by seeing if current player won the game
//These box combinations result in a win
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function resultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameTurns[winCondition[0]];
    let b = gameTurns[winCondition[1]];
    let c = gameTurns[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  //check for blank box values
  let roundDraw = !gameTurns.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  //If nobody has won, and all the box values have not been filled, then play continues  with the other player
  playerChange();
}
//change current player and update game status message to reflect change
//uses a ternary operator to assign a new player.


//********** Get user player piece selection from DOM */
function player1Token(player1) {
  var player1 = document.querySelector("#player1").value;
  // document.querySelector("#token1").innerHTML = player1;
return player1;
}
function player2Token(player2) {
  var player2 = document.querySelector("#player2").value;
  // document.querySelector("#token2").innerHTML = player2;
return player2;
}


function playerChange() {
  currentPlayer = currentPlayer ===  player1Token() ? player2Token() : player1Token();
  statusDisplay.innerHTML = currentPlayerTurn();
}
function restartGame() {
  gameActive = true;
  currentPlayer = player1Token();
  gameTurns = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".box").forEach((cell) => (cell.innerHTML = ""));
}
