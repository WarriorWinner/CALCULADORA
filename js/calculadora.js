let textbox = document.getElementById("inputText")
let p = document.getElementById("p") 
let sinallop= document.getElementById("sinal")

function enterNumber(valor) {

        if(textbox.value=="0"){
            textbox.value=''
        }
    textbox.value+=valor
    }

function operacao(acao){
    if(p.innerText!='' && textbox.value!=''){
                igual();
        }

    if(acao=='soma'){
        sinallop.innerText='+';
    }
     if(acao=='mult'){
        sinallop.innerText='x';
    }
    if(acao=='div'){
        sinallop.innerText='/';
    }
    if(acao=='sub'){
        sinallop.innerText='-';
    }
    p.innerText = textbox.value;
    textbox.value='';
}

function limpar(){
    sinallop.innerText='';
    textbox.value='';
    p.innerText=''
}

function igual(){
    let resultado=0;
    //soma
    if(sinallop.innerText == '+'){
        resultado=parseFloat(p.innerText) + parseFloat(textbox.value)
    }
    //multiplicacao
    if(sinallop.innerText == 'x'){
        resultado=parseFloat(p.innerText) * parseFloat(textbox.value)
    }
    //divisao
    if(sinallop.innerText == '/'){
        resultado=parseFloat(p.innerText) / parseFloat(textbox.value)
    }
    //subtracao
    if(sinallop.innerText == '-'){
        resultado=parseFloat(p.innerText) - parseFloat(textbox.value)
    }
    
    textbox.value=resultado
    sinallop.innerText=''
    p.innerText=''
}