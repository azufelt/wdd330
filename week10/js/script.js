const formBtn = document.querySelector('#formSubmit');
formBtn.addEventListener('click', getForm, false);

function getForm() {
  const fName = document.querySelector('#fname').value;
  var passCheck = document.querySelector('#password').value;
  var re = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");

  if (fName == "") {
    //wiggle field
    const nameWrong = document.querySelector('#fname');
    nameWrong.classList.add('wrongData');

    const Message = `<h3>Please complete all fields on the form.</h3>`;
    document.querySelector('.formMessage').innerHTML = Message;
  } else if (!re.test(passCheck)) {
    const passWrong = document.querySelector('#password');
    passWrong.classList.add('wrongData');
    const Message = `<h3>Make sure your password has 8 characters, including a capital and a number..</h3>`;
    document.querySelector('.formMessage').innerHTML = Message;
  } else if (fName !== "" && re.test(passCheck)) {
    console.log("Valid");
    const Message = `Thank you ${fName} for your submission!`;
    document.querySelector('.formMessage').innerHTML = Message;
  }


}