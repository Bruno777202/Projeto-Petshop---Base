// scripts petshop
document.getElementById("formcontato").addEventListener("submit", function(e){
    e.preventdefault()

    let nome = document.getElementById("nome").value.trim()
    let email = document.getElementById("email").value.trim()
    let mensagem = document.getElementById("mensagem").value.trim()

    if(nome == "" || email == "" || mensagem== ""){
        alert("preencha todos os campos!")
        return;
    }else{
        alert("mensagem enviada com sucesso!")
    }
  this.reset()
})

//******************************************************* *//

let botaomenu= document.getElementById("menu-bnt")
let menu = document.getElementById("menu");

botaomenu.addEventListener("click", () => {
menu.classList.toggle("ativo");
})

const botao = document.getElementById("mododark");

botao.addEventListener("click", () => {

    document.body.classList.toggle("mododark");

    if(document.body.classList.contains("mododark")){
        botao.textContent = "Modo Light";
    } else {
        botao.textContent = "mododark";
    }

});