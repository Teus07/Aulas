// Pegar a lista do pokemom
const listaSelecaoPokemons = document.querySelectorAll(".pokemom")
const PokemomCards = document.querySelectorAll(".pokemom-card")

// Usando o forEach para percorrer a lista de pokemons 
listaSelecaoPokemons.forEach(pokemom => {

    // Usando o evento de click 
    pokemom.addEventListener('click', () => {

    // Pegando a classe .open do HTML e removendo a classe
    const cartaoPokemomAberto = document.querySelector('.open')
    cartaoPokemomAberto.classList.remove('open')

    // Pegando o id dos pokemons (pelo id da lista e pelo id do card )
    const idPokemomSelecionado = pokemom.attributes.id.value
    const idDoCartaoPokemomParaAbrir = idPokemomSelecionado + '-card'
    
    // Adicionando o cartão princiapl do pokemon para abrir 
    const cartaoPokemomParaAbrir = document.getElementById(idDoCartaoPokemomParaAbrir)
    cartaoPokemomParaAbrir.classList.add('open')

    // Lógica de trocar a cor para cada pokemom

    const pokemomAtivoNaListagem = document.querySelector('.ativo')

    pokemomAtivoNaListagem.classList.remove('ativo')

    const pokemomSelecionadoNaListagem = document.getElementById(idPokemomSelecionado)

    pokemomSelecionadoNaListagem.classList.add('ativo')

    })
})