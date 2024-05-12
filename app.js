const task = document.querySelector('#todo');
const btn = document.querySelector('#addTask');
let taskList = document.getElementById('taskList');
const li = document.querySelector('li');
//variable for tasks
let arrayTasks = [];

btn.addEventListener('click', function(e){
    e.preventDefault();

    let inputTask = task.value.trim();
    
    //if input is not empty
    if(inputTask) {
        arrayTasks.push(inputTask);
        const newTask = document.createElement('li');
        const completed = document.createElement('button');

        newTask.textContent = inputTask;
        completed.textContent = 'COMPLETED';

        taskList.appendChild(newTask);
        taskList.appendChild(completed);
        //console.log(arrayTasks);
        
        //  Strikethrough Logic
        let tasksToString = arrayTasks.toString();
        for(let li of tasksToString){
        //for (let i=0; i < arrayTasks.length; i++){
            let li = document.querySelector('li');
            
            console.log(arrayTasks);
            li.addEventListener('click', function(e) {
            // Add the strikethrough
                if(e.target.tagName === 'LI'){
                    e.target.style.textDecoration = e.target.style.textDecoration === "line-through" ? "none" : "line-through";
                }
            });
        }

        //clear the input
        task.value = '';
        completed.addEventListener('click', function (e){
            e.target.parentElement.remove();
        })
        newTask.appendChild(completed);
        
    }
    else if (e.target.tagName === 'li'){

    }
});




/*
for (let i=0; i < arrayTasks.length; i++){
    li = document.querySelector('li');
    //console.log(li);
    console.log(arrayTasks);
    li[i].addEventListener('click', function(e){
        e.target.style.textDecoration = "line-through";
    })
};*/



