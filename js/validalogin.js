var btLogin = document.querySelector("#btLogar");
    btLogin.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form");
        var escutaLogin = document.querySelector("#form-login");
        var escutaSenha = document.querySelector("#form-senha");
        login = escutaLogin.value;
        senha = escutaSenha.value;
        
        if(login=="admin" && senha=="123"){
            window.location.href = "cadastro.html";
        }else{
            var erro = document.querySelector("#erro");
            erro.classList.remove("esconde");     
            form.reset();
        }        
    })  