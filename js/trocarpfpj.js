var tipoCliente = document.querySelector(".fisjur");

var trocaPj = document.querySelector("#bt-pj");
var nomePj = document.querySelector("#nome-empresa");
var cnpj = document.querySelector("#cnpj");
var inscricao = document.querySelector("#inscricao");


var trocaPf = document.querySelector("#bt-pf");
var nomePf = document.querySelector("#nome-cliente");
var cpf = document.querySelector("#cpf");
var rg = document.querySelector("#rg-cliente")

nomePf.classList.add("esconde");  
cpf.classList.add("esconde");
rg.classList.add("esconde");
trocaPj.classList.add("bt-tipocliente-ativo")

trocaPf.addEventListener("click", function(){
    nomePf.classList.remove("esconde");  
    cpf.classList.remove("esconde");
    rg.classList.remove("esconde");
    trocaPf.classList.add("bt-tipocliente-ativo")

    nomePj.classList.add("esconde");
    cnpj.classList.add("esconde");
    inscricao.classList.add("esconde");
    trocaPj.classList.remove("bt-tipocliente-ativo")     
 });

 trocaPj.addEventListener("click", function(){
    nomePj.classList.remove("esconde");
    cnpj.classList.remove("esconde");
    inscricao.classList.remove("esconde");
    trocaPj.classList.add("bt-tipocliente-ativo")

    nomePf.classList.add("esconde");  
    cpf.classList.add("esconde");
    rg.classList.add("esconde");
    trocaPf.classList.remove("bt-tipocliente-ativo")
 });