function saveTodos() {
  const todos = [];
  const list = document.querySelectorAll('#ft_list .todo');
  list.forEach(todo => todos.push(todo.textContent));
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function loadTodos() {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === "todos") {
      try {
        const todos = JSON.parse(decodeURIComponent(value));
        todos.forEach(todoText => addTodo(todoText));
      } catch {}
    }
  }
}

function addTodo(text) {
  const ftList = document.getElementById("ft_list");
  const newTodo = document.createElement("div");
  newTodo.className = "todo";
  newTodo.textContent = text;
  newTodo.addEventListener("click", function () {
    if (confirm("Delete this TO DO?")) {
      newTodo.remove();
      saveTodos();
    }
  });
  ftList.appendChild(newTodo); // insert at end but we use flex-direction: column-reverse
  saveTodos();
}

document.getElementById("newBtn").addEventListener("click", function () {
  const todoText = prompt("Enter your TO DO:");
  if (todoText && todoText.trim() !== "") {
    addTodo(todoText.trim());
  }
});

window.onload = loadTodos;
