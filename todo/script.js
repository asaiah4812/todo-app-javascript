const toDoer = document.querySelector(".todowrapper");
let demo = document.getElementById("demo")

function addButton() {
  if (toDoer.style.display === "none") {
    toDoer.style.display = "flex";
  } else toDoer.style.display = "none";
}

var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  demo.innerHTML = d.toLocaleTimeString();
//   if(demo.innerHTML == "12:59:38 AM"){
//     alert('happy birthday')
//   }
}


const newTodo = document.getElementById('newTodo')
const todoList = document.getElementById('todoList')
const toastSuccess = document.getElementById("toast-success")
const toastDanger = document.getElementById("toast-danger")
const msg = document.getElementById("msg");
const dis = document.getElementsByTagName("main");


function addTodo(){
    if(newTodo.value === ""){
        alert('Please Sir You most add something before..')
        toastDanger.style.display = "block";
        msg.innerHTML = "You most add a todo!";
    }else{
        let li = document.createElement('li')
        li.innerHTML = newTodo.value
        todoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "🔻"
        li.appendChild(span)
        toastSuccess.style.display = "block";
        msg.innerHTML = `Successful add a Todo`
    }
    newTodo.value = "";
    saveTodo()
}

document.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveTodo()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveTodo()
    }
}, false)

function saveTodo(){
    localStorage.setItem("data", todoList.innerHTML)
}

function showTodo(){
    todoList.innerHTML = localStorage.getItem("data")
}

showTodo()