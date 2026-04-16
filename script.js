function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Digite algo!");
        return;
    }

    const ul = document.getElementById("taskList");
    const li = document.createElement("li");

    // 1. Cadastrar/Listar: Criamos o elemento com o texto
    li.innerText = taskText;

    // 2. Marcar como concluída: Ao clicar na tarefa, ela muda de estilo
    li.onclick = function() {
        this.classList.toggle("completed");
    };

    ul.appendChild(li);
    input.value = ""; // Limpa o campo após adicionar
}
