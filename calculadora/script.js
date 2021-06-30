let n1 = ''
let n = ''
let sinal = ''

let comecou = false
let tela = document.getElementById('tela')


function insert(v){
  if (v == 'C'){
    del()
  }else{
    if (sinal=='=' && (Number(v) || v == '0')){
      del()
      recebe_numero(v)
    }
    else if (comecou){
      if(v != '=')
        if (Number(v) || v == '0'){
          recebe_numero(v)
        }
        else {
          if(sinal == ''){
            sinal = v
            n1 = n
            n = ''
          } else{
            operacao(sinal)
            sinal = v
          }
        }
      else{
        operacao(sinal)
      } 
    }
    else if(Number(v)){
      recebe_numero(v)
      comecou = true
    }
  }
}
function limite(){
  return n.length <14
}

function recebe_numero(v){
  if (limite()){
    n += v
    tela.innerText=n
  }
  
}
function del(){
  n1 = ''
  n = ''
  sinal = ''
  tela.innerText=''
}

function operacao(){
  n1 = Number(n1)
  n = Number(n)
  switch(sinal){
    case '+':
      n1 = n1 + n
      break
    case '-':
      n1 = n1 - n
      break
    case 'x':
      n1 = n1 * n
      break
    case '/':
      n1 = n1 / n
      break
  }
 
  if (String(n1).length <= 14){
    tela.innerText=n1
    n = ''
    sinal = '='
  }else{
    del()
    tela.innerText='limite 14 digitos'
    sinal = '='
  }
  
}
