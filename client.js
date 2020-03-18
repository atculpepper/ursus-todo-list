$(document).ready(init);

function init() {
  console.log("Looks like we are connected :)");
  $(".js-addTask-btn").on("click", addNewTask);
}

function addNewTask() {
  console.log("You clicked to submit your task");
}
