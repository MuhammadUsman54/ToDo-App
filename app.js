var toDos = JSON.parse(localStorage.getItem("toDos")) || []
var userInput = document.getElementById("todo");
var updateButton = document.getElementById("update-btn")
var addButton = document.getElementById("add-btn")

var indexToEdit = null;

showTodos();

// Add Todo
function addTodo() {
  if (userInput.value.trim() === "") {
    alert("Please Enter Any Task!");
    return;
  }

  toDos.push(userInput.value);
  localStorage.setItem("toDos", JSON.stringify(toDos))
  userInput.value = "";
  showTodos();
}

// Show Todos
function showTodos() {
  var userList = document.getElementById("list-item");
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

// Delete Todo
function deleteTodo(index) {
  toDos.splice(index, 1);
  localStorage.setItem("toDos", JSON.stringify(toDos));
  showTodos();
}

function editTodo(index) {
  updateBtn.style.display = 'inline-block'
  addButton.style.display = "none";

  userInput.value = toDos[index];
  indexToEdit = index;
}

// Update Todo
function updateTodo() {
  toDos[indexToEdit] = userInput.value;
  localStorage.setItem("toDos", JSON.stringify(toDos));

  userInput.value = "";
  updateBtn.style.display = "none";
  addButton.style.display = "inline-block";
  showTodos();
}



