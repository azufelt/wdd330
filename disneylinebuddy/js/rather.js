import {
  getName
} from "./getName.mjs";

getName();


const ratherBtn = document.querySelector('.ratherBtn');
ratherBtn.addEventListener('click', cardFlip, false);

function cardFlip() {
  var element = document.querySelector('.rather-card');
  // var element = event.currentTarget;
  if (element.className === "rather-card") {
    let front = document.querySelector('.rather-card-inner');
    if (front.style.transform == "rotateX(180deg)") {
      front.style.transform = "rotateX(0deg)";
      // "would you Rather"
      setTimeout(function () {
        clearRatherQ();
      }, 1000);

    } else {
      front.style.transform = "rotateX(180deg)";
      getQuestion();
    }
  }
}

function getRandomInt(Num) {

  let max = 47;
  Num = Math.floor(Math.random() * max);
  return Num;
}

function cardDisplay(message) {
  let displayMessage = document.querySelector('.backratherQ');
  let h2 = document.createElement('h2');
  h2.innerHTML = message;
  displayMessage.append(h2);
}

function getQuestion() {
  var Num;
  let index = getRandomInt(Num);
  const json = "json/rather.json"
  fetch(json)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      var message = jsObject.rather[index].question;
      cardDisplay(message);
    })
};

function clearRatherQ() {
  let displayWindow = document.querySelector('.backratherQ');
  //Clear the old display if one is present
  var child = displayWindow.lastElementChild;
  while (child) {
    displayWindow.removeChild(child);
    child = displayWindow.lastElementChild;
  }
}

function getLength() {
  let jsonlength = "json/rather.json"
  fetch(jsonlength)
    .then(function (list) {
      return list.json();
    })
    .then(function (object) {
      let array = object.rather;
      let maxLength = array.length;
      return maxLength;
    });
}
getLength();