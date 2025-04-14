const tarefas = []; //cria uma variável de somente leitura
const input = document.getElementById('novaTarefa');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return; //compara se dois valores são iguais e do mesmo tipo

  tarefas.push(texto); //Push:  adiciona valores a um array.
  input.value = '';
  atualizarLista();
}

function atualizarLista() { //Executa uma tarefa.
  lista.innerHTML = ''; //innerHTML: usá-la para obter o conteúdo HTML interno de qualquer elemento HTML.

  tarefas.forEach((tarefa, index) => { //forEach:  permite percorrer todos os elementos de um array realizando uma ação para cada elemento.
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