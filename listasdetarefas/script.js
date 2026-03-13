let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function salvarTarefas(){

localStorage.setItem("tarefas", JSON.stringify(tarefas))

}

function atualizarLista(){

let lista = document.getElementById("listaTarefas")

lista.innerHTML = ""

tarefas.forEach((tarefa, index)=>{

let li = document.createElement("li")

li.textContent = tarefa.texto

if(tarefa.concluida){

li.classList.add("concluida")

}

li.onclick = ()=>{

tarefa.concluida = !tarefa.concluida

salvarTarefas()

atualizarLista()

}

let botao = document.createElement("button")

botao.textContent="❌"

botao.onclick=(e)=>{

e.stopPropagation()

tarefas.splice(index,1)

salvarTarefas()

atualizarLista()

}

li.appendChild(botao)

lista.appendChild(li)

})

document.getElementById("contador").textContent =
tarefas.length + " tarefas"

}

function adicionarTarefa(){

let input = document.getElementById("tarefaInput")

let texto = input.value

if(texto===""){

alert("Digite uma tarefa")

return

}

tarefas.push({

texto:texto,
concluida:false

})

input.value=""

salvarTarefas()

atualizarLista()

}

atualizarLista()