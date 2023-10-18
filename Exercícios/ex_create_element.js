function Enviar(){

    // Criando o elemento 'p'
    let nome = document.createElement("p")
    
    // Recuperando o input
    let campo = document.getElementById("campo")

    // Validando o meu input para que eu consiga ver o nome que eu digitei ali
    let ValorCampo = campo.value;
    
    // Pegando o Elemento 'p' e colocando um texto dentro da variável nome
    nome.innerText = ValorCampo.toUpperCase()

    // Anexando o paragrafo dentro do body
    document.body.appendChild(nome)
 
    // Limpando meu input 
    document.getElementById('campo').value=''
}
