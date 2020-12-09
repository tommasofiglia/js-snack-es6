/*************** PESO *******************
235JSnack 1Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*****************************************/

$(function () {

  var tipiZucchina = ["Chiara" , "Di Faenza" , "Scura" , "Americana"];
  var zucchine = [];

  //Ciclo for che crea degli oggetti negli array aventi le proprietà "varietà", "peso" e "lunghezza".

  for (var i = 0; zucchine.length < 10 ; i++) {
    var newObject = {
        varieta: getRndWord(tipiZucchina),
        pesoingrammi: getRndInteger(300, 2000),
        lunghezza: getRndInteger(5,20)
    };

    zucchine.push(newObject);
  };

  console.log(zucchine);

  //Ciclo for che fa la somma dei pesi delle zucchine.
  
  var sum = 0;
  for (var i = 0; i < zucchine.length; i++) {
    sum += zucchine[i].pesoingrammi;
  }

  console.log(sum);
  console.log("Il peso totale in kg è pari a " + (sum/1000).toFixed(2) );

  // Funzione che genera un numero random
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

  //Funzione che sceglie una parola random tra quelle nell'array
  function getRndWord(array) {
    return array[Math.floor(Math.random()*array.length)];
  };
});
