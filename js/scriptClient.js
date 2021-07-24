const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let nacimento = document.getElementById('nacimento').value
    let tel = document.getElementById('tel').value
    let endereco = document.getElementById('endereco').value
    let cpf = document.getElementById('cpf').value

    let dados = {
        nome,
        email,
        nacimento,
        tel,
        endereco,
        cpf,
    }
    let convertDados = JSON.stringify(dados)
    localStorage.setItem('lead', convertDados) 

    alert(`Cadastro de novo usuário realizada com sucesso!`)
})