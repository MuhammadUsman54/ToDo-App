var toDos = [];
var editIndex = null;

// Add Todo
function addTodo() {
  var userInput = document.getElementById("todo");

  if (userInput.value.trim() === "") {
    alert("Please Enter Any Task!");
    return;
  }

  toDos.push(userInput.value);
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
  showTodos();
}

// Edit Todo
function editTodo(index) {
  var userInput = document.getElementById("todo");
  var addBtn = document.getElementById("addBtn");
  var updateBtn = document.getElementById("updateBtn");
  userInput.value = toDos[index];
  editIndex = index;
  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
}

// updateTodo
function updateTodo() {
  var userInput = document.getElementById("todo");
  var addBtn = document.getElementById("addBtn");
  var updateBtn = document.getElementById("updateBtn");

  if (userInput.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  toDos[editIndex] = userInput.value;
  editIndex = null;
  userInput.value = "";
  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";

  showTodos();
}
