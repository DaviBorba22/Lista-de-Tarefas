const tarefas = []; 
const input = document.getElementById('novaTarefa');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return; 

  tarefas.push(texto); 
  input.value = '';
  atualizarLista();
}

function atualizarLista() { 
  lista.innerHTML = ''; 

  tarefas.forEach((tarefa, index) => { 
    const li = document.createElement('li');

    const conteudo = document.createElement('div');
    conteudo.className = 'tarefa-conteudo';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () => {
      texto.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };

    const texto = document.createElement('span');
    texto.textContent = tarefa;

    conteudo.appendChild(checkbox);
    conteudo.appendChild(texto);

    const botoes = document.createElement('div');
    botoes.className = 'botoes';

    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-editar';
    btnEditar.onclick = () => {
      const novoTexto = prompt('Editar tarefa:', tarefa);
      if (novoTexto) {
        tarefas[index] = novoTexto;
        atualizarLista();
      }
    };

    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-remover';
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
