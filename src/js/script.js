var enterButton = document.getElementById("submit")

function login() {

    var campoEmail = document.getElementById("email").value

    var campoSenha = document.getElementById("password").value

    if( campoEmail == "ademir@ademir" && campoSenha == "123" ) {
        window.location.replace("dashboard.html")
    }   else{
        alert("Email ou")
    }

    console.log("entrou no login")
}   
enterButton.addEventListener("click",login)