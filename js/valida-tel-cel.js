function validacel(){
  var cel = document.querySelector("#celular").value;
  if (cel.length!=14){
    console.log("Número de celular inválido")
    document.querySelector("#celular").value="";
    document.querySelector("#celular").focus();
  }else{
    console.log("Celular válido")
  }};

function validatel(){
  var tel = document.querySelector("#telefone").value;
  if (tel.length!=13){
    console.log("Número de telefone inválido")
    document.querySelector("#telefone").value="";
    document.querySelector("#telefone").focus();
}else{
  console.log("Telefone válido")
}};