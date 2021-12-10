import {
  getName
} from "./getName.mjs";

getName();


const ratherBtn = document.querySelector('.ratherBtn');
ratherBtn.addEventListener('click', cardFlip, false);

function cardFlip() {
  var element = document.querySelector('.rather-card');

  if (element.className === "rather-card") {
    let front = document.querySelector('.rather-card-inner');
    if (front.style.transform == "rotateX(180deg)") {
      front.style.transform = "rotateX(0deg)";
      getQuestion();
    } else {
      front.style.transform = "rotateX(180deg)";
      // getAnswer();
    }
  }
}

const flipDirection = [
  "flipBack",
  "flipLeft",
  "flipRight",
  "flipTop",
  "flipBottom"
]

function getRandomInt(Num) {
  let max = 1;
  // console.log(max);
  Num = Math.floor(Math.random() * max);
  return Num;
}

function getQuestion() {
  var Num;
  let index = getRandomInt(Num);
  console.log(Num);
  const json = "json/rather.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      console.log(jsObject);
      var message = jsObject.rather[index].question;
      var location = '.trivia-card-front';
      cardDisplay(message, location);
    })
};

function cardDisplay(message, location) {
  var messageDisplay = document.querySelector(location);
  messageDisplay.innerHTML `<h2>${message}</h2`;
  //WHY ISN"T THIS DISPLAYING IN DOM????
  document.querySelector(location).innerHTML = messageDisplay;
}




// function rotateCube() {
//   // var element = event.currentTarget;
//   var cubeFace = document.querySelector('.cube-face-front');
//   // if(cubeFace.hasAttribute('id', 'fliTop')){
//   //   cubeFace.removeAttribute('id', 'flipTop');
//   // }
//   console.log('test');
//   // let cube = document.appendChild(cubeFace);
//   let Num;
//   let i = getRandomInt(Num);
//   let rotate = flipDirection[i];
//   console.log(i);
//   cubeFace.setAttribute('id', 'animate');


// }

// if (cubeFace.style.transform == "rotateX(180deg)") {
//   cubeFace.style.transform = "rotate(0deg)";
// } else {
//   cubeFace.style.transform + "rotateX(180deg)";
// }
// getRandomInt(Num);
// let rotate = flipDirection[Num];
// cubeFace.style.transform = rotate;