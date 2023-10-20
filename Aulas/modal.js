let abrir = document.getElementById("abrir")
let modal = document.querySelector(".modal")

function AbrirModal(){
    
    if(modal.style.display == 'none'){
            modal.style.display = 'block'

    } else if(modal.style.display === 'none') {
        modal.style.display = 'none'

    } else {
        modal.style.display = 'block'
    }
}

function FecharModal(){
    if(modal.style.display = 'block'){
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
}

/* Segundo forma de fazer o modal aparecer OBS: FRONT-END DIFERENTE DESSE ATUAL

const btn = document.querySelector('.btnAbrir')
btn.addEventListener('click,abrirModal')

const btnFechar = document.querySelector(".btnFechar")
btnFechar.addEventListener('click,abrirModal')


function AbrirModal(){
    
    const modal = document.querySelector(".modal")
    const estiloAtual = modal.style.display

    if(estiloAtual == 'block){
        modal.style.display = 'none'
    } else {
        moda.style.display = 'block'
    }

}

*/