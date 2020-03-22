$(document).ready(init);

let toDo = [];

function init() {
  console.log("Looks like we are connected :)");
  $(".js-addTask-btn").on("click", clickAddNewTask);
  $(".js-list").on("click", ".js-btn-complete", clickComplete);
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

function clickComplete(event) {
  console.log("Complete Clicked");
}

function render() {
  console.log("rendering stuff");
  const $jsList = $(".js-list");
  $jsList.empty();
  for (let aTask of toDo) {
    let completeBtn = '<button class="js-btn-complete">Complete</button>';
    if (aTask.completed === true) {
      completeBtn =
        '<button class="js-btn-complete" disabled>Complete</button>';
    }
    $(".js-list").append(`<li>${aTask.name} ${completeBtn}</li>`);
  }
}
