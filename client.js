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
  const completed = false;

  console.log("You have to" + " " + taskName + " " + "NOW!");

  $(".js-TODO-input").val("");
  //call to the function that will push these values into the toDo array
  addNewTask();
}

// function addNewTask() {
//   const newTask = {
//     name: taskInput,
//     completed: false
//   };
//   toDo.push(newTask);
//   render();
// }

// function render(){
//   for (let aTask of toDo){
//     $(".js-container").append (`
//     <li>
//     `)
//   }
// }
