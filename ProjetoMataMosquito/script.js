
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 20;



nivel = window.location.search;
nivel = nivel.replace('?','');

var criaMosquitoTempo = 1500;

if (nivel === 'normal'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if(nivel === 'insano'){
    criaMosquitoTempo = 700;
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight;
	largura = window.innerWidth;

}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

//posicao do mosquito
function posicaoRandomica() {

    //remover o mosquito anteiror(caso exista)
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        //perdendo vidas ao nao clicar
        if(vidas <= 3) {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        } else {
            window.location.href = 'fim_de_jogo.html';
        }
    }

	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;


	//criar o elemento html
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosca.png';
	mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    mosquito.onclick = function(){
        this.remove();
    }

	document.body.appendChild(mosquito);

    tamanhoRandomico();
    ladoRandomico();
}

//tamanho do mosquito
function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3);
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

//lado do mosquito
function ladoRandomico() {
    var classe = Math.floor(Math.random() * 2);
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}


//iniciar jogo 

function iniciarJogo(){

    var nivel = document.getElementById('nivel').value;

    if(nivel === ''){
        alert('Selecione um nível valido!');
        return false;
    }

    window.location.href = 'app.html?' + nivel;
}
