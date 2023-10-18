function imc(){

    let nome = document.getElementById('nome').value

    let altura = document.getElementById('altura').value

    let peso = document.getElementById('peso').value

    let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){

        let valorIMC = (peso / (altura * altura).toFixed(1))
 
        if(valorIMC < 18.5){

            tipoIMC = "abaixo do peso"

        } else if(valorIMC > 18.6 && valorIMC < 24.9){

            tipoIMC = "peso ideal"

        } else if(valorIMC > 25.0 && valorIMC < 29.9){

            tipoIMC = "acima do peso"

        } else if(valorIMC > 30.0 && valorIMC < 34.9){

            tipoIMC = "obesidade grau I"

        } else if(valorIMC > 35.0 && valorIMC < 39.9){

            tipoIMC = "obesidade grau II"

        } else{

            tipoIMC = "obesidade grau III"

        }

        resultado.innerHTML = "Olá "+nome+" seu IMC é "+valorIMC+" e você está "+tipoIMC

    } else{
        resultado.innerHTML = 'Por favor preencha todos os campos'
    }
}


