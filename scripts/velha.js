// Obtendo os elemnetos do DOM para interação

const casas = document.getElementsByTagName('input'); //busca a lista de casas do tabuleiro

const b_reiniciar = document.getElementById('reiniciar'); //busca o botão de reiniciar 

const label_jogador = document.getElementById('jogador'); //busca o label do jogador que usaremos para mostrar qual jogador tem a vez

// Definindo variáveis de estado do jogo

var jogador = '-';
var vencedor = '-';
var finish;

// Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
        casas[i].addEventListener('click', (event) => {

                //se a casa estiver vazia e ninguém estiver vencido a partida
                if((event.target.value=='-') && (vencedor=='-')) {
                    event.target.value=jogador; //preenche a casa com X ou O
                    event.target.style.color='#bc5e00'; //torna o valor da casa visível

                    trocarJogador(); //função que troca a vez do jogador, a ser definida depois
                    
                    vencedor = vitoria(); //Executa a função vitoria() 


                }

        });

}

// Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {
    for(var i=0;i<9;i++) {
        casas[i].value='-'; //Limpa todas as casas
        casas[i].style.color='#ffff'; //torna o valor invisível
        casas[i].style.backgroundColor='#ffff'; //torna o fundo branco
    }

    vencedor = '-'; //Reseta o vencedor

    sortearJogador(); //Escolhe aleatoriamente qual jogador irá começar

    });

    //Usa uma função que decide aleatoriamente o jogar a fazer a primeira jogada
    var sortearJogador = function() {
            if(Math.floor(Math.random() *2)==0){
                jogador = "O"; //define o jogador O como atual
                label_jogador.innerText="O"; //exibe na página qual é o jogador atual
                label_jogador.style.color='#000000'; //deixa o texto na cor azul
            }

    }

sortearJogador(); //Escolhe aleatoriamente o jogador inicial 

//Alterna a vez entre os jogadores X e Y
var trocarJogador = function() {
        if(jogador=='X'){
                jogador='O';
                label_jogador.innerText='O';
                label_jogador.style.color='#ffffff';

                }else{
                        jogador='X';
                        label_jogador.innerText='X';
                        label_jogador.style.color='#000000';
        }
}

//Verifica se uma condição de vitória foi atingida e colore a linha de vitória
var vitoria = function() {
        if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='-') {
                casas[0].style.backgroundColor='#0F0';
                casas[1].style.backgroundColor='#0F0';
                casas[2].style.backgroundColor='#0F0';

                return casas[0].value;

        }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='-') {
                    casas[3].style.backgroundColor='#0F0';
                    casas[4].style.backgroundColor='#0F0';
                    casas[5].style.backgroundColor='#0F0';

                return casas[3].value;

        }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='-') {
                    casas[6].style.backgroundColor='#0F0';
                    casas[7].style.backgroundColor='#0F0';
                    casas[8].style.backgroundColor='#0F0';

            return casas[6].value;

        }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='-') {
            casas[0].style.backgroundColor='#0F0';
            casas[3].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';

            return casas[0].value;

        }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='-') {
            casas[1].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';

            return casas[1].value;

        }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='-') {
            casas[2].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[2].value;

        }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='-') {
            casas[0].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[0].value;

        }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='-') {
            casas[2].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';

            return casas[2].value;
        }


        return '-';
    }



    

