//get user input
//build JSON
//stringify and store JSON to local storage


//add listener
//add item object/push to local
//render todo list view -foreach
//add whole list to local storage
//get from local
//toggle .foreach item.id -data-key
//Add globally to local storage
//function delete todo item //add to local
//globally GET from local


const button = document.querySelector('button');
button.addEventListener('click', listfunction);
const todoList = [];

/// build JSON 
function listfunction() {
  if (button != "") {
    const itemValue = document.querySelector("#item").value;
    let object = {}
    todoList.push(object);
    var timestamp = new Date().getTime();
    object.timestamp = timestamp;
    object.value = itemValue;
    object.status = "active";
    localStorage.setItem('todoList', JSON.stringify(todoList));
    document.querySelector('#item').value = '';
    // console.log(todoList);
    displayList();
  };

}


console.log(todoList);

const completedButton = document.querySelector('.completedButton');
completedButton.addEventListener('click', listfunction);

const activeButton = document.querySelector('.activeButton');
activeButton.addEventListener('click', listfunction);

//use toggle class attribute to change active to complete/checked

function displayList() {
  
    var getList = JSON.parse(window.localStorage.getItem('todoList'));
    let i = 0;
    getList.forEach((item) => {
      document.querySelector('#output').innerHTML =
        `     <li class="itemLine">
       <label for="${item.value}" class="itemLabel">
         <input type="checkbox" name="${item.value}" class="checkbox">${item.value}</input>
       </label>
         <button name="${item.value}Delete" class="itemDelete">❌</button>
      </li>`
      i++
    });

    let key = item.timestamp;
    let value = item.name;
    localStorage.setItem(key, value);
    // input.value = ''; //this clears input field after li item created
    // listItem.focus; //resets focus so it can listen for a new entry
    const deletebutton = document.querySelector(".itemDelete").value;
    deletebutton.addEventListener('click', function () {
      output.removeChild(li); //go to the output and remove child of the parent called li, because we placed the X as a child element of each li
      localStorage.removeItem(key)
      listItem.focus;
    });
    checkbox.addEventListener('change', function () {
      localStorage.getItem(key)
      localStorage.setItem(key, "completed")
    })
  };
function getListFromLocal() {

}
getListFromLocal();







// function displayList() {


//   if (getList.value != '') {
//     document.querySelector('#output').innerHTML =
// `     <li class="itemLine">
//        <label for="${listItem}" class="itemLabel">
//          <input type="checkbox" name="${listItem}" class="checkbox">${listItem}</input>
//        </label>
//          <button name="${listItem}Delete" class="itemDelete">❌</button>
//       </li>`



//     let key = label.textContent;
//     let value = checkbox.name;
//     localStorage.setItem(key, value);
//     // input.value = ''; //this clears input field after li item created
//     // listItem.focus; //resets focus so it can listen for a new entry
//     deletebutton.addEventListener('click', function() {
//       output.removeChild(li); //go to the output and remove child of the parent called li, because we placed the X as a child element of each li
//       localStorage.removeItem(key)
//       listItem.focus;
//     });
//     checkbox.addEventListener('change',function() {
//       localStorage.getItem(key)
//       localStorage.setItem(key,"completed")
//     } )

//   }
//   document.querySelector('#item').innerHTML = '';
// }