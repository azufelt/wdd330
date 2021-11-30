import {
  getName
} from "./getName.mjs";

getName();

function startCard() {
  var message = "Read to play Disney Trivia?";
  let location = '.triviaCardFront'
  cardDisplay(message, location);
}


function cardDisplay(message, location) {
  var messageDisplay = document.querySelector(location);
  messageDisplay.innerHTML = `<h2>${message}</h2`;
  document.querySelector(location).appendChild = message;
}


const flipCard = document.querySelector('.largeTile');
flipCard.addEventListener('click', getQuestion, false);

function fetchTrivia() {
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      console.log(jsObject);
      var cards = jsObject.triviaCards;
      console.log(cards);
      return (cards);
    })
}

function getQuestion() {
  // fetchTrivia(a);
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      const cards = jsObject.triviaCards;
      //get random index number
      let i = cards.length;
      let num = getRandomInt(i);
      let message = cards[num].question;
      let location = '.triviaCardFront';
      cardDisplay(message, location);

      const flipCard = document.querySelector('.largeTile');
      flipCard.addEventListener('click', cardFlip, false);

      function cardFlip() {
        getAnswer(num)
      }
    })
}


function getAnswer(num) {
  const json = "json/trivia.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      const cards = jsObject.triviaCards;

      let message = cards[num].answer;
      let location = '.triviaCardBack';
      cardDisplay(message, location);
    })
  const flipCard = document.querySelector('.largeTile');
  flipCard.addEventListener('click', getQuestion, false);
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

startCard();