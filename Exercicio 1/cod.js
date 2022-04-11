var botao = document.getElementById('btnEnviar');
var nome = document.getElementById('nome');
var email= document.getElementById('email');

botao.disabled = true;

let nomeVal = false;
let emailVal = false;

nome.addEventListener("blur",
    function(){
        if(nome !== null && nome.value !== " "){
            nomeVal = true;
            if(emailVal){ 
                botao.disabled=false;
            }
        }
        else{
            nomeVal = false;
            botao.disabled=true;
        }
    }
);

email.addEventListener("blur",
    function(){
        if(email !== null && email.value !== " "  && validarEmail(email.value)){
            if(nomeVal){
                botao.disabled=false;
                email= true;
            }
            
        }
        else{
            emailVal = false;
            botao.disabled=true;
        }
    }
);

var validarEmail = (email) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
