export function getName() {
  //get visitor name, log to storage
  const nameInput = document.querySelector("#nameInput").value;


  if (nameInput == "") {
    alert('please enter your name');
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
  }
}