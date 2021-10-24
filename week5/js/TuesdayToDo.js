document.querySelector(".addButton").onclick = function() {
  if(document.querySelector('.item').value.length == 0){
    alert("please enter a task")
  }
  else {
    document.querySelector(".todo-form").innerHTML += `
    <div class="tasks">
      <span id="taskname">
        ${document.querySelector('.item') .value}
        </span>
        <button class="delete">
        X
        </button>
      </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i< current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }
    var tasks = document.querySelectorAll(".taskname");
    for(var i=0; i<tasks.length; i++){
      tasks[i].onclick = function(){
        this.classList.toggle('.completed');
      }
    }
  }
}