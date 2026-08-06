// What You Need:

// State (appState):

// todos: [] - array of todos
// nextId: 1 - to track IDs

// Update Functions:

// addTodo(text) - Add new todo to state
// deleteTodo(id) - Remove todo from state

// Render Functions:

// render() - Display all todos

const appState = {
    todos: [],
    nextId: 1,
}

function addTodo(text) {
    if (text === "") {
        alert("Please input something!");
        return
    }

    appState.todos.push({
        nextId: appState.nextId,
        todos: text
    });
    appState.nextId += 1;
}

function removeTodo(id) {
    appState.todos = appState.todos.filter((item) => item.nextId !== id);
    render();
}

function render() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    appState.todos.forEach((list) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${list.todos}</p>
            <button onclick="removeTodo(${list.nextId})">Remove</button>
        `;
        todoList.appendChild(div);
    })
}

const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");

addBtn.addEventListener("click", () => {
    addTodo(todoInput.value);
    todoInput.value = "";
    render();
});

todoInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        addTodo(todoInput.value);
        todoInput.value = "";
        render();
    }
})