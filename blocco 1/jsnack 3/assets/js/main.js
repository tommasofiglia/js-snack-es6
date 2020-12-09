/********************** CONSEGNA ************************
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
******************************************************/

//Funzione creata con il for.
const sumNumber = (hownumbers) => {
  var sum = 0
  for (var i = 0; i < hownumbers; i++) {
    var userNumber = Number(prompt("Inserisci un numero"));
    var sum = sum + userNumber;
  }
  return sum;
};

console.log(sumNumber(5));

//Funzione creata con il while.
const sumNumber2 = (hownumbers) => {
  var sum2 = 0;
  var i = 0;
  while (i < hownumbers) {
    var userNumber2 = Number(prompt("Inserisci un numero"));
    var sum2 = sum2 + userNumber2;

    i++;
  }
  return sum2;
};

console.log(sumNumber2(5));
