// import {
//   getName
// } from "./getName";

const enterBtn = document.querySelector(".enterBtn");
enterBtn.addEventListener('click', openPage, false);

function openPage() {
  getName();
}

function floatBalloon() {
  //start header "enter Page" slide down animation
  //add a class to the .navBalloon to start animation
  const navBalloon = document.querySelector(".navBalloon");
  navBalloon.classList.add('balloonFly');
  navBalloon.classList.remove('hide');

  const enterScreen = document.querySelector(".enterPage");
  const mainScreen = document.querySelector(".WelcomePage");
  enterScreen.classList.add('screenFall');
  //show/hide class style to have main page appear when balloon floats up
  mainScreen.classList.add('show');
  mainScreen.classList.remove('hide');
  setTimeout(function () {
    enterScreen.classList.remove('enterStuckatTop');
  }, 10000);
  //timer to change the main screen top margin to 0;
  setTimeout(function () {
    mainScreen.style.top = 0;
  }, 13000);
}

function getName() {
  //get visitor name, log to storage
  const nameInput = document.querySelector("#nameInput").value;


  if (nameInput == "") {
    //wiggle field
    const nameWrong = document.querySelector('#nameInput');
    nameWrong.classList.add('wrongData');
    setTimeout(function () {
      nameWrong.classList.remove('wrongData');
    }, 1100);
  } else {
    localStorage.setItem('visitorName', JSON.stringify(nameInput));
    const username = localStorage.getItem('visitorName');
    if (username) {
      // converts back to string
      var displayName = JSON.parse(username);
      // nameTitle.innerHTML = displayName;
      document.querySelector('.nameTitle').innerHTML = displayName;
    }
    // clear the input Name value
    nameInput.value = '';
    floatBalloon()
  }
}