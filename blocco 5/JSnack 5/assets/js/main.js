/************************** CONSEGNA ****************************
Scrivi una funzione che accetti tre argomenti:un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”.
*****************************************************************/

$(function () {

  var elements = ["elemento1" , "elemento2" , "elemento3" , "elemento4" , "elemento5" , "elemento6" , "elemento7" , "elemento8"];

 // Versione della funzione in cui vengono pushati anche gli elementi che si trovano nelle posizioni che abbiamo scritto tramite numeri.

  function elementsBeetween(array , num1 , num2) {
    var beetweenPositions = [];

    for (var i = num1; i <= num2; i++) {
    beetweenPositions.push(array[i]);
    }

    return beetweenPositions;

  };

  // Versione della funzione in cui NON vengono pushati anche gli elementi che si trovano nelle posizioni che abbiamo scritto tramite numeri, ma solo gli elementi che hanno posizione compresa tra essi.

  function elementsBeetween2(array , num1 , num2) {
    var beetweenPositions2 = [];

    for (var i = num1 + 1; i < num2; i++) {
    beetweenPositions2.push(array[i]);
    }

    return beetweenPositions2;
  };

  console.log( elementsBeetween(elements , 1 , 4)); //mostrerà anche i due elementi all'estremo superiore e inferiore della selezione.
  console.log( elementsBeetween2(elements , 1 , 4)); //mostrerà solo gli elementi alla posizione compresa tra i numeri indicati.

});
