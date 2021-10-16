"use strict"
//Each new list item that is created will be an instance of the Item class
const form = document.forms[0];
class Item {
  constructor(name) {
    this.name = name;
  }
} 
//Controller Object- responsible for adding event listener to see when suer adds info.
//When this happens, it will create a new instand of the model, then render the updated view.

const controller = {
  watch(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); //prevent the form from being submitted
      this.add(form.name.value);
    }, false);
  },
  add(name) {
    const item = new Item(name);
    view.render(item);
  }
};

//HTML fragment that show's the instance's name (name from the name property stored in the model) then dynamically inserted into the list.
const view = {
  render(item) {
    const list =document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = item.name;
    list.appendChild(li);
    //reset the input field
    form.name.value ='';
  }
};

//Call watch() method of controller- This watched the form and checks when it is submitted. 
controller.watch(form);