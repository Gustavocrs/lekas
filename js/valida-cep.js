function validacep(){
  var cep = document.querySelector("#cep").value;
  if (cep.length<10){
    console.log("CEP inválido");
    document.querySelector("#cep").value="";
    document.querySelector("#cep").focus();
  }else{
    console.log("CEP válido")
  }};