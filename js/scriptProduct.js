const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    let nomeProduto = document.getElementById('nomeProduto').value
    let codigo = document.getElementById('codigo').value
    let preco = document.getElementById('preco').value
    let quantidade = document.getElementById('quantidade').value

    let dados = {
        nomeProduto,
        codigo,
        preco,
        quantidade,
    }
    let convertDados = JSON.stringify(dados)
    localStorage.setItem('lead', convertDados) 

    alert(`Cadastro de novo Usuário realizada com sucesso!`)
})