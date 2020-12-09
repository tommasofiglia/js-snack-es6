/**************** CONSEGNA *****************
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*****************************************/

$(function () {

var palla = {
  nome: "palla",
  peso: 10
}

palla.peso = Number(prompt("Inserisci un peso per la palla diverso da quello standard (10) "));

console.log(palla);
});
