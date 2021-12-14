export function getName() {
  const username = localStorage.getItem('visitorName');
  if (username != "") {
    // converts back to string
    var displayName = JSON.parse(username);
    // nameTitle.innerHTML = displayName;
    document.querySelector('.nameTitle').innerHTML = displayName;
  }
}

const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};
let copyrightDate = new Date().toLocaleDateString("en-us", options);
document.querySelector("#currentyear").innerHTML = date.getFullYear();