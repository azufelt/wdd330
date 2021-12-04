import {
  getName
} from "./getName.mjs";

getName();

const flipCard = document.querySelector('.trivia-card');
flipCard.addEventListener('click', getRandomInt, false);


function cardFlip() {
  // var element = event.currentTarget;
  var element = document.querySelector('.trivia-card');
  // e.target.querySelector('.tb-drop').classList.add('active');
  // this.querySelector('.trivia-card');
  if (element.className === "trivia-card") {
    let front = document.querySelector('.trivia-card-inner');
    if (front.style.transform == "rotateY(180deg)") {
      front.style.transform = "rotateY(0deg)";
      // getAnswer();
      // getQuestion();

    } else {
      front.style.transform = "rotateY(180deg)";
      // getQuestion();
      // getAnswer();
    }
  }
}

function cardDisplay(message, location) {
  var messageDisplay = document.querySelector(location);
  messageDisplay.innerHTML = `<h2>${message}</h2`;
  document.querySelector(location).appendChild = message;
}

function getRandomInt() {
  let max = 10;
  let Num = Math.floor(Math.random() * max);
  //having getAnswer here populates front and back at the same time, but also makes the answer visible too soon. 
  // getAnswer(Num);
  getQuestion(Num);
}

function getQuestion(Num) {
  let index = Num;
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      var message = jsObject.triviaCards[index].question;
      console.log(message);
      var location = '.trivia-card-front';
      cardDisplay(message, location);
      // cardFlip();
      // setTimeout(getAnswer, 1000);
      // getAnswer(Num);
      setTimeout(() => {
        getAnswer(Num);
      }, 1000);
      this.addEventListener('click', answerFlip, false);
    })
}

function answerFlip() {
  cardFlip();
}

function getAnswer(Num) {
  let index = Num;
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      var message = jsObject.triviaCards[index].answer;
      console.log(message);
      var location = '.trivia-card-back';
      cardDisplay(message, location);
      this.addEventListener('click', flipBacktoQ, false);

    })
}

function flipBacktoQ() {
  getRandomInt();
  flipCard();
}