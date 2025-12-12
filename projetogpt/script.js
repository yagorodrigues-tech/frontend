document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os dados do formulário
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskPriority = document.getElementById("taskPriority").value;

    // Criando a tarefa
    const task = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        priority: taskPriority,
        completed: false
    };

    // Adicionando a tarefa à lista
    addTaskToList(task);

    // Limpando o formulário
    document.getElementById("taskForm").reset();
});

// Função para adicionar tarefa à lista
function addTaskToList(task) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${task.name}</strong> <span>(${task.priority})</span>
        <p>${task.description}</p>
        <small>Entrega: ${task.date}</small>
        <button class="completeBtn">Concluir</button>
        <button class="deleteBtn">Excluir</button>
    `;

    // Adicionando a tarefa ao DOM
    taskList.appendChild(li);

    // Event listener para concluir tarefa
    li.querySelector(".completeBtn").addEventListener("click", function() {
        li.classList.toggle("completed");
        task.completed = !task.completed;
    });

    // Event listener para excluir tarefa
    li.querySelector(".deleteBtn").addEventListener("click", function() {
        taskList.removeChild(li);
    });
}

