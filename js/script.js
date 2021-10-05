const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
document.querySelector("#currentyear").innerHTML 
= date.getFullYear();
