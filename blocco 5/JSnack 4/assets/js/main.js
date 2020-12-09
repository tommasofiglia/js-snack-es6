/************************ CONSEGNA   *****************************
Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*****************************************************************/
$(function () {

  var array1 = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"];
  var array2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
  var mixArray = [];

//Array dove pusherò un elemento qualsiasi come "segnaposto" ogni volta che pusherò in mixArray un elemento di uno dei due array.
  var usedArray1 = [];
  var usedArray2 = [];

//Ciclo for in cui se la i del ciclo è pari ad un numero che diviso per 2 dà resto 0 (cioé numeri pari e 0) pusha in mixArray un elemento del primo array, altrimenti pusha un elemento del secondo array.
// Ogni volta che un elemento di uno dei due array viene pushato in mixArray, allora un elemento "Posto occupato" viene pushato nell'array corrispondente "usedArray".
// Questi due array  verranno così usati, attraverso la loro length, per dire al browser quale elemento dell'array1 o dell'array2 stampare in mixArray al giro successivo.
 
  for (var i = 0; mixArray.length < (array1.length + array2.length) ; i++) {

     if (i % 2 == 0) {
      mixArray.push(array1[usedArray1.length]);
      usedArray1.push("Posto occupato");
    } else {
      mixArray.push(array2[usedArray2.length]);
      usedArray2.push("Posto occupato");
    }

  };
  console.log(mixArray);

});
