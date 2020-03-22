$(document).ready(init);

let toDo = [];

function init() {
  console.log("Looks like we are connected :)");
  $(".js-addTask-btn").on("click", clickAddNewTask);
}

function clickAddNewTask(event) {
  //prevent automatic reload page
  event.preventDefault();
  console.log("You clicked to submit your task");
  const taskName = $(".js-TODO-input").val();

  console.log("You have to" + " " + taskName + " " + "NOW!");

  //call to the function that will push these values into the toDo array
  addNewTask();
}

function addNewTask() {
  const newTask = {
    name: $(".js-TODO-input").val(),
    completed: false
  };
  toDo.push(newTask);
  $(".js-TODO-input").val("");
  render();
}

function render() {
  const $jsList = $(".js-list");
  $jsList.empty();
  for (let aTask of toDo) {
    $(".js-list").append(
      `<li class = "js-bullet-item" >` +
        aTask.name +
        `</li>` +
        `<button class = "toggle-btn btn" data-inline = "true" >Complete</button>`
    );
  }
}
