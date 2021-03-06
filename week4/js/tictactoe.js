const statusDisplay = document.querySelector('.gameStatus');

let gameActive = true;
let currentPlayer = player1Token();
let gameTurns = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => "Player " + currentPlayer + " has won!";
const drawMessage = () => "Game ended in a draw!";
const currentPlayerTurn = () => "It's " + currentPlayer + "'s turn";

statusDisplay.innerHTML = currentPlayerTurn();
document.querySelectorAll('.box').forEach(cell => cell.addEventListener("click", cellTouch));
document.querySelector(".restart").addEventListener("click", restartGame);


function cellTouch(cellEvent) {
  const clickedBox = cellEvent.target;
  const clickedBoxIndex = parseInt(
    clickedBox.getAttribute("data-cell-index"));
  if (gameTurns[clickedBoxIndex] !== "" || !gameActive) {
    return;
  }
  boxPlayed(clickedBox, clickedBoxIndex);
  resultValidation();
}

function boxPlayed(clickedBox, clickedBoxIndex) {
  gameTurns[clickedBoxIndex] = currentPlayer;
  clickedBox.innerHTML = currentPlayer;
}

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
  let roundDraw = !gameTurns.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  playerChange();
}

function player1Token(player1) {
  var player1 = document.querySelector("#player1").value;
  return player1;
}

function player2Token(player2) {
  document.querySelector("#token2").innerHTML = player2;
  return player2;
}

function playerChange() {
  currentPlayer = currentPlayer === player1Token() ? player2Token() : player1Token();
  statusDisplay.innerHTML = currentPlayerTurn();
}

function restartGame() {
  gameActive = true;
  currentPlayer = player1Token();
  gameTurns = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".box").forEach((cell) => (cell.innerHTML = ""));
}