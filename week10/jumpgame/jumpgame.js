var dinoChar = document.querySelector(".dino");
dinoChar.addEventListener('click', jump, false);

var block = document.querySelector(".block");
const gameOverBox = document.querySelector(".gameOver");

function jump() {
  if (dinoChar.classList != "animate") {
    dinoChar.classList.add("animate");
  }
  setTimeout(function () {
    dinoChar.classList.remove('animate');
  }, 500)
}

var checkDead = setInterval(function () {
    var characterTop =
      parseInt(window.getComputedStyle(dinoChar).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 80 && blockLeft > 10 && characterTop >= 130) {
      block.style.animation = "none";
      block.style.display = "none";
      if (block.classList = "start") {
        block.classList.remove("start");
      }
      alert("Game Over");
    }
  },
  10);

var startBtn = document.querySelector(".startBtn");
startBtn.addEventListener('click', startGame, false);


function startGame() {
  if (block.classList != "start") {
    block.classList.add("start");
    // block.style.display = "inherit";
  }
}