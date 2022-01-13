var buttonEL = document.querySelector("#save-task"); // finds the button and stores in a variable
var tasksToDoEL = document.querySelector('#tasks-to-do'); // finds the list element and stores in a variable

var createTaskHandler = function() { // added code to listen out for a click on the button
    var listItemEL = document.createElement('li'); // when the click happens, create list item element and store it into a variable
    listItemEL.className = 'task-item'; // give that list item a class of task-item
    listItemEL.textContent = 'This is a new task'; // give that list item text saying 'This is a new task'
    tasksToDoEL.appendChild(listItemEL); // add that list item as a child to the tasks to do object
}

buttonEL.addEventListener('click' , createTaskHandler)