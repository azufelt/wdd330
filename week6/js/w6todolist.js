
//add listener
//add item object/push to local
//render todo list view -foreach
//add whole list to local storage
//get from local
//toggle .foreach item.id -data-key
//Add globally to local storage
//function delete todo item //add to local
//globally GET from local


const input = document.querySelector('#item');
const list = document.querySelector('.todoList');

const button = document.querySelector('button');
button.addEventListener('click', addItems);
const todoList = [];

function addItems(input) {
  if (input !== "") {
    const todoItem = {
      timestamp: Date.now(),
      name: input,
      status: false
    };
    todoList.push(todoItem);
    addToLocalStorage(todoItem);

    //clear the user input field
    input.value ="";
  }
}

function addToLocalStorage(todoItem) {
  localStorage.setItem('todoItem', JSON.stringify(todoItem));
  showListView(todoItem);
}

function showListView(todoItem) {

}