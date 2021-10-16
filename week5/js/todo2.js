
const button = document.querySelector('button');
button.addEventListener('click', listfunction);


function listfunction() {
  const listItem = document.querySelector("#item").value
  if (listItem.value != '') {
    document.querySelector('#output').innerHTML =
`     <li class="itemLine">
       <label for="${listItem}" class="itemLabel">
         <input type="checkbox" name="${listItem}" class="checkbox">${listItem}</input>
       </label>
         <button name="${listItem}Delete" class="itemDelete">❌</button>
      </li>`

    let key = label.textContent;
    let value = checkbox.name;
    localStorage.setItem(key, value);
    // input.value = ''; //this clears input field after li item created
    // listItem.focus; //resets focus so it can listen for a new entry
    deletebutton.addEventListener('click', function() {
      output.removeChild(li); //go to the output and remove child of the parent called li, because we placed the X as a child element of each li
      localStorage.removeItem(key)
      listItem.focus;
    });
    checkbox.addEventListener('change',function() {
      localStorage.getItem(key)
      localStorage.setItem(key,"completed")
    } )

  }
  document.querySelector('#item').innerHTML = '';
}








function storeItem(listfunction) {

  console.log(listfunction);
  // let storekey = listfunction(key)
  // let value = listfunction(value)
  localStorage.setItem(key, value)
}
