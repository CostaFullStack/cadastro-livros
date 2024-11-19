const resultado = document.querySelector("#resultado")

const filmes_cadastrados = JSON.parse(localStorage.getItem("filmes"))

filmes_cadastrados.forEach((filmes) => {
    const novo_card = document.createElement("div")
    novo_card.className = "card"

    const titulo = document.createElement("h2")
    titulo.textContent = `Título: ${filmes.titulo}`

    const diretor = document.createElement("p")
    diretor.textContent = `Diretor: ${filmes.diretor}`

    const genero = document.createElement("p")
    genero.textContent = `Gênero: ${filmes.genero}`

    const ano = document.createElement("p")
    ano.textContent = `Ano: ${filmes.ano}`

    novo_card.append(titulo, diretor, genero, ano)
    resultado.appendChild(novo_card)
})