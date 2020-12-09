/***************** CONSEGNA ***********************
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
**************************************************/

$(function () {

  var userWord = prompt("Inserisci una parola");

 // Funzione che inverte la parola
  function reverseword(word) {

    //Trasformo la parola inserita da stringa ad array
    var arrayWord = userWord.split("");
    console.log(arrayWord);

    //Creo un ciclo for attraverso il quale pusho in un array le lettere della parola con ordine contrario a quello iniziale.
    var reverseArray = [];
    for (var i = arrayWord.length - 1 ; i >= 0; i--) {
      reverseArray.push(arrayWord[i]);
    }
    console.log(reverseArray);

    //Uso join per trasformare l'array con le lettere invertite in una stringa.
    var invertedWord = reverseArray.join("");
    console.log(invertedWord);

    return invertedWord;
  }

  alert("La parola al contrario è " + reverseword(userWord))

});
