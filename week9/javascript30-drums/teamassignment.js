var key = document.querySelectorAll(".key");

Array.from(key)
  .forEach(btn => btn.addEventListener('click', () => getSound()));

var soundFile = document.querySelectorAll("audio");


var audioDuration;
var sound;
let i;
function getSound(){
  //get the data-key from the <div> that got clicked

var keySound = window.event.target.parentElement.attributes["data-key"].value
  console.log(keySound);
  //add an if statement for if its undefined then do nothing. Because this search for data-key value may also find the parent div and then will fail. 
var playingBtn = window.event.target.parentElement;
  //add that class name of 'playing' to the existing class list

soundFile.forEach(audioElement => {
var soundbyte = audioElement.getAttribute("data-key");
console.log(soundbyte);

    //match audio data-key to div data-key
    if(soundbyte === keySound){
      playSound(audioElement);
      playingBtn.classList.add('playing');
      var moveNum = transform();
      i = translateY();
      playingBtn.style = `transform: translateY(${moveNum}px)`; 
    }
  //gets the length of the audio file and makes it longer by multiplying
  var audioDuration = audioElement.duration * 2000;

    //function to timeout and remove the playing class, takes a generic function
    setTimeout(function() {
    playingBtn.classList.remove('playing');
    }, audioDuration);
    })

   //if a single ket gets pressed 10 times, then remove the .moveButton class
   //count how many 
}
 function playSound(x) {
   //#2 of core requirements, make sound play faster
  x.currentTime = 0;
  x.play()
}


var buttonKey = document.querySelectorAll(".key");
Array.from(buttonKey)
  .forEach(btn => btn.addEventListener('click', () => moveButton()));

  function transform() {
    var move = window.event.parentElement.attributes["style"];
    return move = 100;
  }