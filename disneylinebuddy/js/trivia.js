import {
  getName
} from "./getName.mjs";

getName();

const flipCard = document.querySelector('.trivia-card');
flipCard.addEventListener('click', cardFlip, false);

function cardFlip() {
  var element = event.currentTarget;
  if (element.className === "trivia-card") {
    let front = document.querySelector('.trivia-card-inner');
    if (front.style.transform == "rotateY(180deg)") {
      front.style.transform = "rotateY(0deg)";
      getQuestion();
    } else {
      front.style.transform = "rotateY(180deg)";
      getAnswer();
    }
  }
}

function getQuestion() {
  var Num;
  let index = getRandomInt(Num);
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      var message = jsObject.triviaCards[index].question;
      var location = '.trivia-card-front';
      cardDisplay(message, location);
    })
};

function cardDisplay(message, location) {
  var messageDisplay = document.querySelector(location);
  messageDisplay.innerHTML = `<h2>${message}</h2`;
  document.querySelector(location).appendChild = message;
}

function getAnswer() {
  let index = document.querySelector('.trivia-card-inner').getAttribute('data-key');
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (answerObject) {
      console.log(answerObject)
      var message = answerObject.triviaCards[index].answer;
      console.log(message);
      var location = '.trivia-card-back';
      cardDisplay(message, location);
    })
}

function getRandomInt(Num) {
  let max = 3;
  Num = Math.floor(Math.random() * max);
  //having getAnswer here populates front and back at the same time, but also makes the answer visible too soon. 
  let dataKey = document.querySelector('.trivia-card-inner')
  dataKey.setAttribute('data-key', Num);
  return Num;
}

getQuestion();