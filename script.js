var tarefas = []; //var: cria uma variável 
var input = document.getElementById("novaTarefa"); //getElementById: retorna um Element cuja tem propriedade id correspondente à uma string especificada
var lista = document.getElementById("listaTarefas");

function adicionarTarefa() {
  var texto = input.value.trim(); //Trim:remover os espaços em branco do início e do fim de uma string 
  if (texto === "") return; // ===: executa um teste para ver se dois valores são iguais (booleano).
  tarefas.push(texto); //Push: adiciona valores a um array.
  input.value = "";
  atualizarLista();
   // return: retornar a variável da function
}

function atualizarLista() { //function: Executa uma tarefa.
  lista.innerHTML = ""; //innerHTML: usá-la para obter o conteúdo HTML interno de qualquer elemento HTML.

  tarefas.forEach((tarefa, index) => { //forEach: permite percorrer todos os elementos de um array realizando uma ação para cada elemento.
    var li = document.createElement("li");

    var conteudo = document.createElement("div");
    conteudo.className = "conteudo"

    var checagem = document.createElement("input");
    checagem.type = "checkbox";
    checagem.onchange = () => { //onChange: quando um usuário altera a opção selecionada de um elemento
      texto.style.textDecoration = checagem.checked ? "line-through" : "none"
    };

    var texto = document.createElement("span");
    texto.textContent = tarefa;

    conteudo.appendChild(checagem); //appendChild: adiciona um novo nó filho ao final de um nó pai na estrutura do DOM
    conteudo.appendChild(texto);

    var botoes = document.createElement("div");
    botoes.className = "botoes";

    var btnEditar = document.createElement("button");
    btnEditar.className = "bt-editar";
    btnEditar.onclick = () => { //=> : definir uma arrow function (arrow: escrever funções de maneira mais concisa, limpa e legível)
      var novoTexto = prompt("Editar tarefa:", tarefa); //promp: exibe uma caixa de diálogo na pagina
      if (novoTexto) { //if:  executa a afirmação; Else: executa as falsas
        tarefas[index] = novoTexto;
        atualizarLista();
      }
    };

    var btnRemover = document.createElement("button");
    btnRemover.className = "bt-remover";
    btnRemover.onclick = () => { //onClick: definir uma função a ser executada quando um elemento HTML é clicado
      tarefas.splice(index); //Splice: altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
      atualizarLista();
    };

    botoes.appendChild(btnEditar);
    botoes.appendChild(btnRemover);

    li.appendChild(conteudo);
    li.appendChild(botoes);
    lista.appendChild(li);
  });
}