function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}
/*A função inclui_nome exibe uma caixa de diálogo de prompt que solicita ao usuário inserir seu nome.

Ela verifica se o usuário inseriu um nome (ou seja, nome_variavel não é vazio).

Se um nome for inserido, ele atualiza o conteúdo de um elemento HTML com o ID "marcacao_nome" para mostrar o nome inserido.

Se o usuário não inserir um nome, exibe um alerta informando que o nome não foi atribuído e chama a própria função novamente para solicitar o nome até que um nome seja fornecido.

*/

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp4 = document.querySelector('input[name="quest_5"]:checked');
    var resp4 = document.querySelector('input[name="quest_6"]:checked');
    var resp4 = document.querySelector('input[name="quest_7"]:checked');
    var resp4 = document.querySelector('input[name="quest_8"]:checked');
    var resp4 = document.querySelector('input[name="quest_9"]:checked');
    var resp4 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Resposta errada cabaço!"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML ="Resposta errada cabaço!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Resposta errada cabaço!"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Resposta errada cabaço!"
        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Resposta errada cabaço!"

        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Resposta errada cabaço!"

        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Resposta errada cabaço!"

        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Resposta errada cabaço!"

        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Resposta errada cabaço!"

        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Resposta errada cabaço!"

        }

        

        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões, parabens gênio!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}
/*A função funcao_resposta é chamada para processar as respostas a um questionário com 10 perguntas.

Para cada pergunta, ela verifica se a resposta correta foi selecionada e atualiza a interface de acordo.

Ela mantém um contador para contar o número de respostas corretas.

No final, exibe o número de respostas corretas e uma mensagem de parabéns se todas as perguntas foram respondidas. Se alguma pergunta não foi respondida, exibe um alerta.*/