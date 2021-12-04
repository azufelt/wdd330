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

    } else {
      front.style.transform = "rotateY(180deg)";

    }
  }
}



// function cardDisplay(message, location) {
//   var messageDisplay = document.querySelector(location);
//   messageDisplay.innerHTML = `<h2>${message}</h2`;
//   document.querySelector(location).appendChild = message;
// }

// function getRandomInt() {
//   let max = 10;
//   let Num = Math.floor(Math.random() * max);
//   //having getAnswer here populates front and back at the same time, but also makes the answer visible too soon. 
//   return Num;
//   // getQuestion(Num);
// }

// function getQuestion() {
//   let index = getRandomInt();
//   const json = "json/trivia.json"
//   fetch(json)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsObject) {
//       var message = jsObject.triviaCards[index].question;
//       console.log(message);
//       var location = '.trivia-card-front';
//       cardDisplay(message, location);
//       let front = document.querySelector('.trivia-card-inner');
//       front.setAttribute('data-key', Num);
//       setTimeout(() => {
//         getAnswer(Num);
//       }, 1000);
//       // let front = document.querySelector('.trivia-card-inner');
//       // front.addEventListener('click', answerFlip, false);
//     })
// }

// function answerFlip() {
//   cardFlip();
// }

// function getAnswer(Num) {
//   let index = Num;
//   const json = "json/trivia.json"
//   fetch(json)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsObject) {
//       var message = jsObject.triviaCards[index].answer;
//       console.log(message);
//       var location = '.trivia-card-back';
//       cardDisplay(message, location);
//       // let back = document.querySelector('.trivia-card-inner');
//       // back.addEventListener('click', flipBacktoQ, false);

//     })
// }