function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute //usamos o + para ele tentar converter para numero inteiro.

    if (chuteForInvalido(numero)) { //isNan
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return  //para conseguir passar uma informação falando olha esse valor é invalido, nao executa mais nada dessa função.
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return //se for invalido, nao execute mais nada dessa função.
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i><div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i><div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()  //recarrega a pagina inicial e reinicia o jogo.
    }
})