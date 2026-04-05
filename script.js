let addTaskbtn = document.getElementById("add-task");
let divContainer = document.getElementById("container")
let taskContainer = document.getElementById("todo");
let defaultText = "add ur task"

addTaskbtn.addEventListener("click",()=>{

let parentTaskCard = document.createElement("div");
parentTaskCard.id = "parent-task-card"

let taskCard = document.createElement("div");
taskCard.innerText = defaultText;
taskCard.id = "task"
taskCard.contentEditable = true;


taskContainer.append(parentTaskCard);
parentTaskCard.append(taskCard);

taskCard.addEventListener("click", (e)=>{
  let selectedTaskCard = e.target;

  if(selectedTaskCard.innerText == defaultText){
    selectedTaskCard.innerText = ""
  }
})

taskCard.addEventListener("blur", (e)=>{
  let selectedTaskCard = e.target;
  let selectedTaskCardParent = selectedTaskCard.parentElement;
 console.log(selectedTaskCardParent)
  if(selectedTaskCard.innerText.trim() == ""){
    selectedTaskCard.remove();
  }
})

let selectTag = document.createElement("select");

let columnName = ["todo", "working", "done"];

for(t of columnName){
  let optionTag = document.createElement("option");
  optionTag.value = t;
  optionTag.innerText = t[0].toUpperCase() + t.slice(1);
  selectTag.append(optionTag);
}
parentTaskCard.append(selectTag);

selectTag.addEventListener("change", (e)=>{
  let selectedValue = e.target.value;
  let selectedColumn = document.getElementById(selectedValue);
  console.log(selectedColumn)

  selectedColumn.append(parentTaskCard)
})

})