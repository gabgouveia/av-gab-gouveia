const resultado = document.querySelector('#Resultado')
const altura = document.querySelector('#Altura')
const peso = document.querySelector('#Peso')

const calcIMC = () => {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    console.log(imc)
    resultado.innerHTML = imc
}

const limpar = () => {
    resultado.value = ""
    altura.value = ""
    peso.value = ""
}