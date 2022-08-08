

var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function adicionarObjetos(){
    var novoObjeto = document.getElementById('objeto').value;

    if(novoObjeto != "") {
        if(objetos.indexOf(novoObjeto) !== -1){
            alert('Objeto já foi adicionado');
        }

        objetos.push(novoObjeto);
        console.log(objetos);

        document.getElementById('objeto').value = '';

    } else {
        alert("Informe um valor válido");
    }
}

function ordenarObjetos() {
    objetos.sort(function mixedCase(a , b){
        x = a.toUpperCase(),
        y = b.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
    });
    console.log(objetos);
}

