    
    const lista_nomes = [
        {Nome:"Ana Paula",idade: 15, sexo: 'feminino'},
        {Nome:"Carlos",idade: 17, sexo: 'masculino'},
        {Nome:"Cristiano",idade: 14, sexo: 'masculino'},
        {Nome:"Aline",idade: 13, sexo: 'feminino'},
        {Nome:"Pedro",idade: 15, sexo: 'masculino'},
        {Nome:"Sofia",idade: 12, sexo: 'feminino'},
        {Nome:"Paloma",idade: 16, sexo: 'feminino'},
    ]

    console.log(lista_nomes.filter(function(n){
        if(n.idade >= 15 && n.idade <= 17){
            return n 
        } else {

        }
    }))