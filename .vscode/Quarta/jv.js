const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

//Aqui estamos criando uma função para atribuída dentro 
function addTask() 
{
     if(input.value !== "") /// Aqui informamos que se(if) o input for diferente de vazio (!== ""), ele irá criar um elemnto (createElement) de 'li', o texto que ela possui é igual o input value, ou seja o valor do input que será digitado.
     {
        const li = document.createElement("li");
        li.textContent = input.value; //Traduzindo esta linha estamos criando um texto será o valor preenchido pelo usuário dentro do Input.

       //Aqui estamos criando um botão (button) para remover esses itens de (li).
        const removeBotao = document.createElement("button");

        //chamamos nossa const removerBotao e inserindo um texto chamado "Remover"
        removeBotao.textContent = "Remover";

        //Criamos aqui uma função que ao clicar neste botão ele irá executar uma função de Remover o filho da nossa ul ou seja a "li". 
        removeBotao.onclick = function() {
            ul.removeChild(li); //a função é pegar o lemento filho da ul, que  no caso é a nossa "li" e remove-lá.
        };

        ul.appendChild(li); //Estamos adicionando um filho para nossa (ul).
        li.appendChild(removeBotao); // Aqui, chamamos nossa const "li" e estamos adicinando a ela um filho (appenChild).

        input.value = "";//usado para limpar o campo do input apos adicionado o iten de lista

    } 
    else 
    {
       alert("Por favor, insira uma tarefa")   
    }
    
    
    
    
    
}

