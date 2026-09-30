const form = document.getElementById("form");

const input = document.getElementById("input-field");

const todos = document.getElementById("todos");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoAction = input.value;

  if (todoAction) {
    const todoEl = document.createElement("li");
    const index = todos.children.length + 1;
    todoEl.innerText = `   ${index}  ${todoAction}`;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    todos.appendChild(todoEl);
  }

  input.value = "";
});
