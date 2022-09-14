//criei a função que vai atualizar o tempo de modo fixo
function atualizarTempo(){

//estou selecionando o texto das horas que esta no html e guardando em uma varável
var display = document.querySelector(".display"); 

//criando a variável da hora atual
var agora = new Date();

var horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());


//agora estou alterando o valor da variavel do texto pela hora atual
display.textContent = horario;

}

//para quando o numero dos minutos for menos que 10
function corrigirHorario(numero){
    if(numero<10){
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
//usando o setinterval eu invoco a função de atualizar o tempo, a cada 1s
setInterval(atualizarTempo,1000);
console.log(horario);
