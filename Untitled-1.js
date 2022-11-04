
        
let x = 0 
var saldo = 100.5;// float
var nome = prompt('insira seu nome');
alert(`ola, ${nome} é um prazer ter voce por aqui`);
function inicio(){
    var escolha = parseInt(prompt('selecione uma opção 1.) saldo | 2.) Extrato | 3.) Saque | 4.) Deposito | 5.)transferencia | 6.) sair '))
    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            ver_extrato();
            break;
        case 3:    
            fazer_saque();
            break;
        case 4:
            fazer_deposito();    
            break;
        case 5 :   
            fazer_transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;

    }

}
function ver_saldo(){
var senha = parseFloat(prompt("insira sua senha: "));
if (senha != 3589){
    alert('Senha incorreta.');
    ver_saldo()
}
else if(senha === 3589){
    alert('seu saldo atual é: ' + saldo);
    inicio();
}

}

function ver_extrato(){
var senha = parseFloat(prompt("insira sua senha: "));
if(senha != 3589){
    alert('Senha incorreta.')
    ver_extrato()
}
else if(senha === 3589){
    alert("seu extrato:\nlojas pernanbucanas 100R$\n" + "casas Bahia 200R$");
    inicio()
}
}
function fazer_saque(){
var Saque = parseFloat(prompt('qual é o valor para saque?'));
var Senha = parseFloat(prompt('insira sua senha: '));
if (isNaN(saque) || saque === ''){
  alert ('por favor, informe um numero:');
    fazer_saque();
}
if(senha != 3589){
alert('senha incorreta')
fazer_saque()
}
else if (saldo < saque) {
alert('operação não autorizada')

}
else if(saque <= 0){
alert("operação não autorizada")
fazer_saque();
}
else (senha === 3589); {
saldo -= saque;
//saldo = saldo - saque;
alert('seu saldo atual é:' + saldo);
inicio();
}
}
function fazer_deposito(){
    var deposito = parseFloat(prompt('qual o valor para deposito?'));
    //not a number
    if (idNaN(deposito) || deposito ==="") {
        alert("por favor, informe um nummero.");
        fazer_deposito();
    } 
    else if (deposito <= 0){
        alert('operação não autorizada');
        fazer_deposito()
    }
 
else {
    saldo += deposito;
    //saldo = saldo + deposito;
    alert("seu saldo atual é:" + saldo);
    inicio()
}
}
function fazer_transferencia(){
    var transferencia = parseFloat(prompt('informe o numero da conta: ' ));
    var valortransferincia = parseFloat (prompt('informe o numero da transferencia:'))
    var senha = parseFloat(prompt('insira sua senha: '));
    if (isNaN(transferencia) || transferencia === ''){
        alert('por favor, informe o numero da conta valido:');
        fazer_transferencia();
    }
    else if (senha != 3589){
        alert('senha incorreta.')
        fazer_transferencia()
    }
    else if (saldo < valortransferincia) {
        alert('operação não autorizada');
        fazer_transferencia
    }
    else if (valortransferincia <= 0) {
        alert('operação não autorizada');
        fazer_transferencia()
    }
    else (senha === 3589); {
        saldo -= valortransferincia;
        //saldo = saldo - saque;
        alert("Seu saldo atual é: " + saldo);
        inicio();
    }   
 }        

 function sair(){
    var confirm = confirm('voce deseja sair?');
    if(confirma){
        alert('${nome}, foi um prazer ter você por aqui!')
        window.close();
    
    }
    else{
        inicio();
    }
 }


 function erro() {
    alert('Por favor, informe um número entre 1 e 6.')
    inicio();
 }
inicio();