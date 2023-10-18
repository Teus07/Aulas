let nome = prompt("Digite o nome da nave:")
let velocidade = 0
let opcao = true  

while(opcao){
    let menu = prompt("1-Acelerar a nave em 5km \ 2-Desacelerar a nave em 5km \ 3-Imprimir os Dados \ 4- Sair")
    if(menu == 1){
        acelerar()
    }
        
    else if (menu == 2){
        desacelerar()
    } 
    
    
    else if (menu == 3){
        imprimir()
    }
    
    else if(menu == 4 ){                      
        alert("Obrigado por viajar conosco")
        opcao = false 
    } else {
        alert("Opção inválida")
    }
}

function acelerar(){
    velocidade += 5
    return alert(velocidade)
}

function desacelerar(){
    if(velocidade <= 0){
        alert("Sua nave já está parada")
    } else {
        velocidade -= 5
    }
}

function imprimir(){
  return alert("O nome da nave é " + nome +  " e a sua velocidade é " + velocidade)  
}

function fechar(){
    
}



/* Ex de como usar o while 
    let contador = 1 

    while(contador <= 1000){
        console.log(contador)
        contador ++
    }
*/