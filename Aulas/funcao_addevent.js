const elemento = document.getElementById("meuBotao")

elemento.addEventListener("click", minhaFuncao)

function minhaFuncao(){
    document.getElementById("texto").innerHTML = "Olá Mundo"
}