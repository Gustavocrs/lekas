function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

function fMascEx() {
  obj.value=masc(obj.value)
}

function mCNPJ(cnpj){
  cnpj=cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
  cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
  cnpj=cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
  cnpj=cnpj.replace(/(\d{4})(\d)/, "$1-$2") 
  
  return cnpj
 }

function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

  return cpf
}

function mRG(rg){
  rg=rg.replace(/\D/g,"")
  rg=rg.replace(/(\d{2})(\d)/,"$1.$2")
  rg=rg.replace(/(\d{3})(\d)/,"$1.$2")
  rg=rg.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

  return rg
}

function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/(\d{2})(\d)/,"$1.$2")
    cep=cep.replace(/(\d{3})(\d)/,"$1-$2")

    return cep
}

function mTEL(tel){
  tel=tel.replace(/\D/g,"")
  tel=tel.replace(/(\d{0})(\d)/,"$1($2")
  tel=tel.replace(/(\d{2})(\d)/,"$1)$2")
  tel=tel.replace(/(\d{2})(\d{1,4})$/,"$1-$2")
  
  return tel
}

function mCEL(cel){
  cel=cel.replace(/\D/g,"")
  cel=cel.replace(/(\d{0})(\d)/,"$1($2")
  cel=cel.replace(/(\d{2})(\d)/,"$1)$2")
  cel=cel.replace(/(\d{5})(\d{1,5})$/,"$1-$2")

  return cel
}