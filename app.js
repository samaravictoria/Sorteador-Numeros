function sortear() {
    // Captura e converte os valores dos inputs para inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value); 

        // Exibe os valores capturados para debug (desativado)
            // alert(`Quantidade: ${quantidade}`);
            // alert(`Do número: ${de}`);
            // alert(`Até o número: ${ate}`);

        // Gera um único número aleatório no intervalo (testado e desativado)
            // let numero = obterNumeroAleatorio(de, ate);
            // alert(numero); 

    // Array para armazenar os números sorteados
    let sorteados = []; 
    let numero; 

    // Laço para sortear a quantidade de números desejada
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório
        numero = obterNumeroAleatorio(de, ate); 

        // Garante que o número não se repita
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o número ao array de sorteados
        sorteados.push(numero);
    }

        // Exibe os números sorteados no console ou em um alerta (desativado)
            // alert(sorteados);

    // Exibe os números sorteados na interface do usuário
    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
}

// Função auxiliar para gerar um número aleatório entre min e max (inclusive)
function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min); // Arredonda o mínimo para cima
    max = Math.floor(max); // Arredonda o máximo para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min; // Retorna um número aleatório no intervalo
