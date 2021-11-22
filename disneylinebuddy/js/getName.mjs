export function getName() {
  const username = localStorage.getItem('visitorName');
  if (username != "") {
    // converts back to string
    var displayName = JSON.parse(username);
    // nameTitle.innerHTML = displayName;
    document.querySelector('.nameTitle').innerHTML = displayName;
  }
}