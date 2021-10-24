"use strict"
function Todo(id, content,isDone) {
  this.id = id;
  this.content = content;
  this.isDone = isDone;
};

//controller
function TodoController() {
  this.todoList = [];
  this.id = 1;
  this.ENTER_KEY = 13;
  this.todoInput = document.querySelector("#newTodo");
  this.todoListView = document.querySelector("#todoListView");
};
TodoController.prototype = {

  getTodoFromLocalstorage: function(key) {
    var todoList = JSON.parse(localStorage.getItem(key)) || [];
    return todoList;
  },
  setTodoLocalstorage: function(key) {
    localStorage.setItem('todoList', JSON.stringify(key));
  },
  handleTodoItem: function (value) {
    this.isDone = false;
    var mainArray = TodoController.getTodoFromLocalstorage('todoList');
    this.id = TodoController.idLargestofLocal(mainArray) + 1;
    var todoItem = new Todo(this.id, value, this.isDone);
    return todoItem;
  },
  
}