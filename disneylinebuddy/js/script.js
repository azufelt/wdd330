const enterBtn = document.querySelector(".enterBtn");
enterBtn.addEventListener('click', openPage, false);

function openPage() {

  //start header "enter Page" slide down animation
  //add a class to the .navBalloon to start animation
  const navBalloon = document.querySelector(".navBalloon");
  navBalloon.classList.add('balloonFly');
  navBalloon.classList.remove('hide');

  const enterScreen = document.querySelector(".enterPage");
  enterScreen.classList.add('screenFall');
  setTimeout(function () {
    enterScreen.classList.remove('enterStuckatTop');
  }, 10000)

}