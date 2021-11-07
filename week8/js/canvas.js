//get canvas element on page
var canvas = document.getElementById("myCanvas");
//set the context: the place where your drawing is rendered
var context = canvas.getContext("2d");
//fill brush with color for the stroke
context.strokeStyle = "red";
//brush color to define the fill
context.fillStyle = "rgba(0, 0, 255, 0.5)";
//We can use any CSS value to set the stroke, as long as it is specified as a string

//draw a rectangle
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);