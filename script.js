var tarefas = []; 
var input = document.getElementById("novaTarefa"); 
var lista = document.getElementById("listaTarefas");

function adicionarTarefa() {
  var texto = input.value.trim(); 
  if (texto === "") return; 
  tarefas.push(texto); 
  input.value = "";
  atualizarLista();

  function atualizarLista() { 
    lista.innerHTML = ''; 
  
    tarefas.forEach((tarefa, index) => { 
      var li = document.createElement("li");
  
      var conteudo = document.createElement("div");
      conteudo.className = "tarefa-conteudo";
  
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onchange = () => { 
        texto.style.textDecoration = checkbox.checked ? "line-through" : "none";
      };
  
      var texto = document.createElement("span");
      texto.textContent = tarefa;
  
      conteudo.appendChild(checkbox);
      conteudo.appendChild(texto);
  
      var botoes = document.createElement("div");
      botoes.className = 'botoes';
  
      var btnEditar = document.createElement("button");
      btnEditar.className = "btn-editar";
      btnEditar.onclick = () => {
        var inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = tarefa;
        inputEdit.className = "input-editar";
  
        inputEdit.onblur = () => {
          tarefas[index] = inputEdit.value.trim() || tarefa;
          atualizarLista();
        };

        conteudo.replaceChild(inputEdit, texto); 
        inputEdit.focus();
      };
  
      var btnRemover = document.createElement("button");
      btnRemover.className = "btn-remover";
      btnRemover.onclick = () => { 
        tarefas.splice(index, 1); 
        atualizarLista();
      };
  
      botoes.appendChild(btnEditar);
      botoes.appendChild(btnRemover);
  
      li.appendChild(conteudo); 
      li.appendChild(botoes);
      lista.appendChild(li);
    });
  }
}
