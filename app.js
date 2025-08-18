var toDos = [];

function addTodo() {
    var userInput = document.getElementById("todo")

   if(userInput.value.trim() === ""){
     alert("Please Enter Any Task!")
     return;
   }

     toDos.push(userInput.value);
   userInput.value = ""


    showTodos();
}

function showTodos() {
    var userList = document.getElementById("list-item")

    userList.innerHTML = "";

    for (var i = 0; i < toDos.length; i++) {
        userList.innerHTML += `
          <li>
            ${toDos[i]}
            <div class="actions">
              <button class="edit-btn" onclick="editTodo(${i})">Edit</button>
              <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
            </div>
          </li>
        `;
      }
    }

function deleteTodo(index){
    toDos.splice(index,1) 
    showTodos()
}

function editTodo(index) {
    var newValue = prompt("Edit your task:", toDos[index]);
    if (newValue !== null && newValue.trim() !== "") {
        toDos[index] = newValue;
        showTodos();
    }
}


