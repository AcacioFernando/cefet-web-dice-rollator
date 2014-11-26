/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var qtdeD4;
var qtdeD6;
var qtdeD8;
var qtdeD10;
var qtdeD12;
var qtdeD20;
function Roleta() {
    var resposta = "";
    var soma = 0;
    qtdeD4 = document.getElementById('quantidadeD4');
    qtdeD6 = document.getElementById('quantidadeD6');
    qtdeD8 = document.getElementById('quantidadeD8');
    qtdeD10 = document.getElementById('quantidadeD10');
    qtdeD12 = document.getElementById('quantidadeD12');
    qtdeD20 = document.getElementById('quantidadeD20');

    var respostas4;
    for (var aux = 0; aux < qtdeD4.value; aux++) {
        respostas4 = Math.ceil(Math.random() * 4);
        resposta = resposta.concat(respostas4 + "+");
        soma += respostas4;
    }

    var respostas6;
    for (var aux = 0; aux < qtdeD6.value; aux++) {
        respostas6 = Math.ceil(Math.random() * 6);
        resposta = resposta.concat(respostas6 + "+");
        soma += respostas6;

    }

    var respostas8;
    for (var aux = 0; aux < qtdeD8.value; aux++) {
        respostas8 = Math.ceil(Math.random() * 8);
        resposta = resposta.concat(respostas8 + "+");
        soma += respostas8;
    }

    var respostas10;

    for (var aux = 0; aux < qtdeD10.value; aux++) {
        respostas10 = Math.ceil(Math.random() * 10);
        resposta = resposta.concat(respostas10 + "+");
        soma += respostas10;
    }
    var respostas12;
    for (var aux = 0; aux < qtdeD12.value; aux++) {
        respostas12 = Math.ceil(Math.random() * 12);
        resposta = resposta.concat(respostas12 + "+");
        soma += respostas12;
    }

    var respostas20;
    for (var aux = 0; aux < qtdeD20.value; aux++) {
        respostas20 = Math.ceil(Math.random() * 20);
        resposta = resposta.concat(respostas20 + "+");
        soma += respostas20;
    }
    resposta = resposta.concat("0 = " + soma);

    var div = document.getElementById("resultado");

    div.innerText = resposta;





}
