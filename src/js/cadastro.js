var formProduto = document.getElementById("form-produto")

function cadastrarProduto(event) {
    // Preveni o comportamento padrao do formulário
    event.preventDefault()

    var produto = document.getElementById("nome-produto").value
    var quantidade = document.getElementById("quantidade-produto").value

    var imagem = document.getElementById("imagem-produto").value

    console.log(produto)
    console.log()

    console.log("Função cadastrar produtos chamada")
}

formProduto.addEventListener("submit", cadastrarProduto)