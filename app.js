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

    // Altera o status do botão "Reiniciar"
    alterarStatusBotao(); 
}

// Função auxiliar para gerar um número aleatório entre min e max (inclusive)
function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min); // Arredonda o mínimo para cima
    max = Math.floor(max); // Arredonda o máximo para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min; // Retorna um número aleatório no intervalo
}

function alterarStatusBotao() {
    // Obtém o botão "Reiniciar" pelo ID
    let botao = document.getElementById('btn-reiniciar');
    
    // Verifica e alterna entre as classes para habilitar ou desabilitar o botão
    if (botao.classList.contains('container__botao-desabilitado')) { 
        // Remove a classe "desabilitado" e adiciona a classe "habilitado"
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao'); 
    } else {
        // Remove a classe "habilitado" e adiciona a classe "desabilitado"
        botao.classList.remove('container__botao'); 
        botao.classList.add('container__botao-desabilitado'); 
    }
}

function reiniciar() {
    // Reseta os valores dos inputs
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Reseta o texto da área de resultados
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>'; 

    // Altera o status do botão "Reiniciar" para desabilitado
    alterarStatusBotao(); 
}
