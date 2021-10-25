const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', store, false);
let todoList = [];

class item {
    constructor(itemValue) {
        this.timestamp = new Date().getTime();
        this.name = itemValue;
        this.complete = false;
    }
}

function store() {
    const itemValue = document.querySelector("#listItem").value
    document.querySelector('#output').innerHTML = '';

    if (itemValue === '') {
        document.querySelector('#output').innerHTML =
            `<p>Add an item to your list</p>`;

    } else {
        let newItem = new item(itemValue);
        let List = {
            newItem
        };
        todoList.push(List);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        document.querySelector('#listItem').value = '';


        outputList(JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList))));
    }
}





function outputList(list) {
    document.querySelector("#output").innerHTML = '';
    // console.log(todoList);
    // const list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));
    // console.log(list);

    let i = 0;
    for (i; i < list.length; i++) {
        let itemName = list[i].newItem.name;
        let itemTS = list[i].newItem.timestamp;


        if (itemName != '') {
            let li = document.createElement('li');
            let label = document.createElement('label');
            let checkbox = document.createElement('input');
            label.textContent = itemName;
            li.setAttribute('data-key', itemTS);
            label.setAttribute('for', itemName);
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('class', 'checkbox');
            checkbox.setAttribute('name', itemName);
            

            if (list[i].newItem.complete) {
                checkbox.checked = true;
            }


            let d = label.textContent;
            let ts = li.getAttribute('data-key');

            let deletebutton = document.createElement('button');

            //  li.textContent = itemName;
            deletebutton.textContent = '\u2718';

            li.append(checkbox)
            li.append(label)
            li.append(deletebutton);

            document.querySelector("#output").append(li);

            checkbox.addEventListener('click', function (e) {
                const TS = e.target.parentElement.getAttribute('data-key');
                if (checkbox.checked === true) {
                    let list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));
                    for (i = 0; i < list.length; i++) {
                        console.log(TS, list[i].newItem.timestamp);
                        if ((list[i].newItem.complete === false) && (list[i].newItem.timestamp == TS))
                            list[i].newItem.complete = true;
                            li.setAttribute('class', 'complete');
                        localStorage.setItem('todoList', JSON.stringify(list));

                    }
                } else if (checkbox.checked === false) {
                    let list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));
                    for (i = 0; i < list.length; i++) {
                        if ((list[i].newItem.complete === true) && (list[i].newItem.timestamp == TS))
                            list[i].newItem.complete = false;
                            li.removeAttribute('class', 'complete');
                        localStorage.setItem('todoList', JSON.stringify(list));

                    }
                }

            })


            deletebutton.addEventListener('click', function () {
                let list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));


                for (i = 0; i < list.length; i++) {
                    if ((list[i].newItem.name === d) && (list[i].newItem.timestamp === itemTS)) {
                        list.splice(i, 1);
                        todoList.splice(i, 1);

                        output.removeChild(li);
                    }

                }

                localStorage.setItem('todoList', JSON.stringify(list));
            })

        }

    }
}

const allButton = document.querySelector('#all');
const activeButton = document.querySelector('#active');
const completeButton = document.querySelector('#complete');

allButton.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));

    outputList(list);
}, false);

activeButton.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList))).filter(it => !it.newItem.complete);
    outputList(list);
}, false);

completeButton.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList))).filter(it => it.newItem.complete);
    outputList(list);
}, false);