// const squareElement = document.getElementById('square');
// let angle = 0;

// setInterval(() => {
//   angle = (angle + 2) % 360;
//   squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000 / 60);

const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
  angle = (angle + 2) % 360;
  squareElement.style.transform = `rotate(${angle}deg)`
  window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);



///canvas drawing
const canvasElement = document.getElementById('canvas');

// use getContext() to access the context
const context = canvasElement.getContext('2d');

// assign fill and stroke colors
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color
//lineWidth property is used to set the width of any line drawn onto the canvas
//it's default is 1 pixel
context.lineWidth = 4;

//fillRect() can draw a filled-on rectabgle. 
//first two params are the coordinates of the top-left corner, then 3rd is the width, and thee last param is the height. 
context.fillRect(10, 10, 100, 50);

//strokeRect() makes a rectangle border only
context.strokeRect(10, 100, 100, 50);

//straight lines are drawn by the moveTo() and lineTo() methods. 
//they can be used together to produce a path
//nothing will be drawn onto canvas until the stroke() method is called. 
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

//arc() method used to draw an arc of given radius
//first two params are coordinates of the center of the arc, next is radius
//then start angle, then the finish angle (measured in radians), last param is boolean to say should arc be drawn counter-clockwise
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

//fillText() is used to write text on the canvas
//first param is text to be displayed, next two aparams are the x and y coordinates
//font property can be used to set the font style, otherwise font is inherited from <canvas> CSS... MUST be changed BEFORE the fillText()method is used to draw the text
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);


//canvas is also being used to draw data charts that are updated in real-time based on delivered data. 