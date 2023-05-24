function init(){
  document.addEventListener("DOMContentLoaded", glueText)
}

function glueText(){
  const task = document.body.querySelector("form#create-task-form");
  task.addEventListener("submit", e=>{
    e.preventDefault()
    const newGuy = document.createElement("li");
    const description = document.querySelector("input#new-task-description");

    const taskText = description.value;
    newGuy.textContent = taskText;

    //Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", ()=>{
      glueDown.removeChild(newGuy, deleteButton)
    });

    newGuy.appendChild(deleteButton);

    const glueDown = document.querySelector("ul#tasks")
    glueDown.append(newGuy);
    console.log(newGuy)
    e.target.reset();
  
    


  });
};

init();