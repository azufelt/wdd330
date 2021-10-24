//get user input and add it to a list in local storage
  //make an array and then push a new object (list item) to the array
  //include object notation data that includes: item name value, timestamp, active/completed status
//get list from local storage and display it to user in <ul><li>
//allow a checkbox to mark as complete. search array for timestamp value and change status to complete
//allow an X to delete item, search array for timestamp value and delete
//

const todoForm = document.querySelector('.todoForm');
const todoList = document.querySelector('.todoList');
const todoItem = document.querySelector('.todoItem');

let todoArray = []

//add eventlistener
todoForm.addEventListener('submit', function(event) {
  //prevent from page reloading
  event.defaultPrevented();
  addTodo(todoList.value);
});

//add item object/push to local
function addTodo(item) {
  //if input is not empty
  if (item !== "") {
    //instantiate an object
    const todoObject = {
      timestamp:Date.now(),
      name: item,
      status: false
    };
    //add the object to the todoArray
    todoArray.push(todoObject);
    addToLocalStorage(todoArray);
    //clear the user input box
    todoList.value = "";
  }
}

//render todo list view -use foreach
function showList(todoArray) {
  todoArray.forEach(function(item) {
    //check if item is completed
    const checked= item.completed ? 'checked' : null;

    //make <li>
    const li = document.createElement('li');
    li.setAttribute('class','item');
    li.setAttribute('data-key', item.timestamp);

    if (item.completed === true) {
      li.classList.add('checked');
    }
    li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>
    ${item.name}
    <button class="deleteBtn">X</button>`;
    todoItem.append(li);
  });
}

//add whole list to local storage
function addToLocalStorage(todoArray) {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
  //render DOM view
  renderTodos(todoArray);
}

//get from local
function getFromLocalStorage() {
  const itemOutput = localStorage.getItem('todoArray');
  //if an item exists
  if (itemOutput) {
    todoArray = JSON.parse(itemOutput);
    renderTodos(todoArray);
  }
}

//toggle item.id -data-key using .foreach
function toggle(timestamp) {
  todoArray.forEach(function(item) {
    if (item.timestamp == timestamp) {
      item.completed = !item.completed;
    }
  });
  //Add to local storage
  addToLocalStorage(todoArray);
}

//function delete todo item //add to local
function deleteItem(timestamp) {
  //filter the li with the matching timestamp and update the array
  todoArray = todoArray.filter(function(item) {
    //return all of the items with timestamps that don't match the one we filtered for
    return item.timestamp != timestamp;
  });
  //update local storage list
  addToLocalStorage(todoArray);
}
//globally GET any items from local storage
getFromLocalStorage();
