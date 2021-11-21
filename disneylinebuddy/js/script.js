const enterBtn = document.querySelector(".enterBtn");
enterBtn.addEventListener('click', openPage, false);

function openPage() {

  //get visitor name, log to storage
  const visitorName = document.querySelector("#nameInput").value;


  if (visitorName == "") {
    alert('please enter your name');
  } else {
    localStorage.setItem(visitorName, JSON.stringify(visitorName));
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
    }, 10000)
    //timer to change the main screen top margin to 0;
    setTimeout(function () {
      mainScreen.style.top = 0;
    }, 13000)

  }


}