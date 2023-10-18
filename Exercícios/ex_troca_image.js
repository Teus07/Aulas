function TrocarImagem(){
    let lampada = false

    if(lampada){
        document.getElementById("lampada").src = './Images/lampadaApagada.png'

        lampada = false 
    } else {
        document.getElementById("lampada").src = './Images/lampadaAcesa.png'

        lampada = true
    }
}

document.getElementById("lampada").addEventListener("click",TrocarImagem)

