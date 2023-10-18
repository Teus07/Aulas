let peso = parseFloat(prompt('Digite seu peso'))
let altura = parseFloat(prompt('Digite sua altura:'))
let res = (peso / (altura * altura))

if ( res < 18.5){
    alert("Seu imc foi " + res + ' e seu você está abaixo do peso')
} else if (res >= 18.5 && res <= 24.9){
    alert("Seu imc foi " + res + ' e seu você está com o peso adequado')
} else if (res > 24.9 && res <= 29.9){
    alert("Seu imc foi " + res + ' e seu você está acima do peso')
} else if (res > 29.9 && res <= 34.9){
    alert("Seu imc foi " + res + ' e seu você está com Obesidade de Grau 1')
} else if (res > 34.9 && res <= 39.9){
    alert("Seu imc foi " + res + ' e seu você está com Obesidade de Grau 2')
} else {
    alert("Seu imc foi " + res + ' e seu você está com Obesidade de Grau 3')
}