
let nivel = prompt("Professor qual é o seu nível:")

if (nivel == 1 ){
    let horas = prompt('Professor digite suas horas trabalhadas')
    alert('Professor seu salário foi R$' + parseFloat(horas * 12)) 
} else if ( nivel == 2){
    let horas = prompt('Professor digite suas horas trabalhadas')
    alert('Professor seu salário foi R$'  + parseFloat(horas * 17))
} else if (nivel == 3) {
    let horas = prompt('Professor digite suas horas trabalhadas')
    alert('Professor seu salário foi R$'  + parseFloat(horas * 25))
} else {
    alert('Por favor insira um nível válido')
}
