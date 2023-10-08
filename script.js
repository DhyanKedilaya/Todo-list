const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');


addButton.addEventListener('click', function(){

//to get the task from input
const taskText = taskInput.value.trim();
//The aria-valuemax attribute identifies the highest value property in a range element
// trim removes the leading and trailing white spaces


//check if the task is not empty
if(taskText !== ""){

    //create a new list item element
    const listItem = document.createElement('li');

    //create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');
    //The classList property returns the CSS classnames of an element.
    
    //create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent= 'Delete';
    deleteButton.classList.add('delete-button');

    //append the tasks and delete button to the listitem
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);


    //append the list item to the task list
    taskList.appendChild(listItem);

    //to clear the input field
    taskInput.value= "";
}

});

taskList.addEventListener('click', function(event){

//to check if the clicked element has the "delete-button" class

    if(event.target.classList.contains('delete-button')){

        //get the parent list item and remove it from the tasklist

        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);

    }

});