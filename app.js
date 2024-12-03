function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value); 

    // alert(`Quantidade: ${quantidade}`);
    // alert(`Do número: ${de}`);
    // alert(`Até o número: ${ate}`);

    // let numero = obterNumeroAleatorio(de, ate);
    // alert(numero); 

    let sorteados = []; 
    let numero; 

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate); 
        sorteados.push(numero);

    }

    alert(sorteados);
}

function obterNumeroAleatorio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
