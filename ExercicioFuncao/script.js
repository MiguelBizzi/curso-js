
var num1 = parseInt(prompt("Digite o primeiro numero"));
var operacao = prompt("Digite qual operacao ('soma' ou 'subtracao')");
var num2 = parseInt(prompt("Digite o segundo numero"));


function calculo(num1, num2, operacao) {
    if (operacao == 'soma') {
        var resultado = num1 + num2 ;
    } else if(operacao == 'subtracao'){
        var resultado = num1 - num2 ;
    }
    return resultado;
}

document.write("O resultado é: " + calculo(num1, num2, operacao))