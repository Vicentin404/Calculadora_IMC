function calcular(){//Declarações de Variaveis
    let altura = window.document.getElementById('altura')
    let peso = window.document.getElementById('peso')
    let resultado = window.document.getElementById('resultado')
    if (altura.value.length == 0 || peso.value.length == 0) {
        alert('[ERRO] Algumas informações não foram preenchidas adequadamente!')
    } else { //convertanto a string
        let alt = Number(altura.value)
        let pes = Number(peso.value)
        let soma = pes / (alt*alt)
        resultado.innerHTML = `O seu resultado deu ${soma.toFixed(2)}`
    }
}