function VerificarCampo(){
    let select = document.querySelector("select").value

    if(select == 'desabilitado'){

    document.querySelector("input").disabled = true
    
    let msg = document.getElementById("mensagem")
        
    msg.innerText = "DESABILITADO"

    msg.style.backgroundColor = "red"
    
    msg.style.color = "White"

    } else {
    document.querySelector("input").disabled = false
    
    let msg = document.getElementById("mensagem")

    msg.innerText = ''


    }
}