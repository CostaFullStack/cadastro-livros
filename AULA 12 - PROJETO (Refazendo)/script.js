const titulo = document.querySelector("#titulo")
const diretor = document.querySelector("#diretor")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")
const formulario = document.querySelector("#formulario")
const botao_cadastrar = document.querySelector("#botao_cadastrar")
const botao_voltar = document.querySelector('#botao_voltar')

const lista_filmes = JSON.parse(localStorage.getItem("filmes")) || []

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const filme = {
        titulo: titulo.value,
        diretor: diretor.value,
        genero: genero.value,
        ano: ano.value
    }

    lista_filmes.push(filme)


    localStorage.setItem("filmes", JSON.stringify(lista_filmes))

    formulario.reset()
    titulo.focus()
    
    window.location.href = "/index.html"

})

botao_voltar.addEventListener("click", (e)=> {
    e.preventDefault()

    window.location.href = "/index.html"
})


