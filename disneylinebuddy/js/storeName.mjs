export function storeName() {
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
  }
}