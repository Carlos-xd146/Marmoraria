function login() {
    var nome = document.getElementById('Nome').value;
    var senha = document.getElementById('Senha').value;

    if(nome == 'Carlos' && senha == '123'){
        window.location.href="http://127.0.0.1:5500/Paginaprincipal.html"
    } else{
        document.getElementById('resultadologin').innerHTML = "*Nome ou Senha incorretos*";
    } 
} 