/* SELECIOANDO ELEMENTOS DO HTML E DO JS

document.querySelector(".texto2") // Selecionando CLASS

document.querySelector(".texto1") // Selecionando ID

*/


/* TROCANDO TEXTOS 

let paragrafo = document.querySelector(".textos2")

paragrafo.innerText = "Troquei o texto da classe .textos2"

// 2 Forma 

//document.querySelector(".texto2").innerText = "Troquei o texto da classe .texto2"

*/


/* TROCAR TEXTOS COM ELEMENTOS HTML 

document.querySelector("#texto1").innerHTML = "<h2> Troquei o texto e a tag do id #texto1"

*/


/* ALTERANDO ESTILOS COM CSS 

let texto = document.getElementById("texto1")

texto.style.backgroundColor = "green"

*/


/* CRIANDO ELEMENTOS COM JS 

let paragrafo = document.createElement("p") // Criando um Elemento do tipo "P"

paragrafo.innerHTML = "Texto Novo Aqui" // Trocando o texto 

paragrafo.body.appendChild(paragrafo) // Anexando o paragrafo dentro do body

*/


/* TROCANDO ELEMENTOS NO JS 

let images = document.querySelector("img")

images.setAttribute("src", "linkDaImagem")

*/


/* EVENTOS COM DOM 

// EVENTOS MAIS USADOS / COLOCAMOS DENTRO DA TAG DO BOTÃO

- onclick()
- onmouseenter()
- onmouseout()
- onchange()

*/


/*  ADDEVENTLISTENER

// EVENTO USADO SOMENTE NO ARQUIVO JS

texto.addEventListener("click", suafuncao)

*/


/* PARENTNODE 

// Informa o pai do elemento selecionado

document.qureySelector("li").parentNode

*/


/* */
