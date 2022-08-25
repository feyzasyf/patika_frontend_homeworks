// JQuery library is used

// tasks array will store objects with name and isCompleted value to keep track of the toggling state
// define initial value
let tasks = [];

// fetching the tasks from the localStorage
let storedTasks = JSON.parse(localStorage.getItem("task"));
if (storedTasks) {
  tasks = storedTasks;
}

// loading the tasks from the local storage to DOM
tasks.forEach((element) => {
  $("#list").append(
    "<li>" +
      element.name +
      '<button type="button" class="btn-close float-end" aria-label="Close"></button></li>'
  );

  // checking the isCompleted value of the object, if isCompleted=true, add "checked" class
  if (element.isCompleted) $("#list").children().last().addClass("checked");
});


//in order to access the elements directly with "this" keyword inside the function scope,
//I had to add the events with JQuery

// adding eventListener to delete buttons
$("#list li button").click(deleteTask);

// adding click event to list items for toggling
$("#list li ").click(toggleTask);




// **************ADD FUNCTION************************************
// adding new tasks to the array
function addTask() {
  let value = $("#task").val();
  

// check the entered value
// if empty,show error toast 
  if(value.trim().length == 0){
    $(".error").toast("show");
    $("#task").val("");
    return;
  }

  //new task is pushed to our tasks array
  tasks.push({ name: value, isCompleted: false });

  // DOM changes
  $("#list").append(
    "<li>" +
      value +
      '<button type="button" class="btn-close float-end" aria-label="Close"></button></li>'
  );

  // save the task list in localStorage
  localStorage.setItem("task", JSON.stringify(tasks));

  //  delete the value in the input zone
  $("#task").val("");

// show success toast
  $(".success").toast("show");

//  adding classes to our newly added task
  $("#list").children().last().click(toggleTask);
  $("#list").children().last().children().last().click(deleteTask);
}



// **************DELETE FUNCTION************************************
// delete task function
function deleteTask() {
  const deletedItem = $(this).parent();
  const text = deletedItem.text();

//   returns the array without the deletedItem
  tasks = tasks.filter((task) => {
    return task.name !== text;
  });

  //   DOM changes
  deletedItem.remove();
  // updating localStorage
  localStorage.setItem("task", JSON.stringify(tasks));
}



// **************TOGGLE FUNCTION************************************
// toggling the tasks complete/incomplete by adding/removing the "checked" class
function toggleTask() {
  $(this).toggleClass("checked");

  // changing the state of the clicked task
  const index = tasks.findIndex((task) => task.name == $(this).text());
  tasks[index].isCompleted = !tasks[index].isCompleted;

  // updating localStorage
  localStorage.setItem("task", JSON.stringify(tasks));
}
