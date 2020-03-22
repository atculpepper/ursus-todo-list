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
  console.log("Complete Clicked", this);
  const itemIndex = $(this).data("index");
  console.log(itemIndex);

  if (toDo[itemIndex].completed === true) {
    toDo[itemIndex].completed = false;
  } else {
    toDo[itemIndex].completed = true;
  }
  render();
}

function render() {
  console.log("rendering stuff");
  const $jsList = $(".js-list");
  $jsList.empty();
  for (let i = 0; i < toDo.length; i++) {
    const task = toDo[i];
    let bgClass = "notCompleted";
    let completeBtn = `<button data-index="${i}"class="js-btn-complete btn">Complete</button>`;
    if (task.completed === true) {
      bgClass = "isComplete";
      completeBtn = `<button data-index="${i}" class="js-btn-complete btn" disabled>Complete</button>`;
    }
    $(".js-list").append(
      `<li class="${bgClass}">${task.name} ${completeBtn}</li>`
    );
  }
}
