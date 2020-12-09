/***************************** CONSEGNA ******************************
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
********************************************************************/

  var tipiZucchina = ["Chiara" , "Di Faenza" , "Scura" , "Americana"];
  var zucchine;
  var zucchineCorte;
  var zucchineLunghe;
  var sumCorte;
  var sumLunghe;

  // Ciclo for che crea degli oggetti negli array aventi le proprietà "varietà", "peso" e "lunghezza".

  var zucchine = [];

  for (var i = 0; zucchine.length < 10 ; i++) {

    var newObject = {
        varieta: getRndWord(tipiZucchina),
        pesoingrammi: getRndInteger(300, 2000),
        lunghezza: getRndInteger(2,30)
    };

    zucchine.push(newObject);
  };
  console.log(zucchine);

  // Ciclo for che, a seconda della lunghezza degli oggetti, pusha questi in uno dei due array "zucchineCorte" o "zucchineLunghe".

  var zucchineCorte = [];
  var zucchineLunghe = [];

  for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
      zucchineCorte.push(zucchine[i]);
    } else {
      zucchineLunghe.push(zucchine[i]);
    }
  };

  console.log(zucchineCorte);
  console.log(zucchineLunghe);

  // Ciclo che sommi i pesi di tutte le zucchine corte e di tutte le zucchine lunghe.

  // Zucchine Corte
  var sumCorte = 0;
  for (var i = 0; i < zucchineCorte.length; i++) {
    var pesoZucchineCorte = zucchineCorte[i].pesoingrammi;
    sumCorte += pesoZucchineCorte;
  }
  console.log("Il peso totale delle zucchine corte in kg è pari a " + (sumCorte / 1000).toFixed(2));

  // Zucchine Lunghe
  var sumLunghe = 0;
  for (var i = 0; i < zucchineLunghe.length; i++) {
    var pesoZucchineLunghe = zucchineLunghe[i].pesoingrammi;
    sumLunghe += pesoZucchineLunghe;
  }
  console.log("Il peso totale delle zucchine lunghe in kg è pari a " + (sumLunghe / 1000).toFixed(2));

  /******************* FUNZIONI *********************/

  // Funzione che genera un numero random
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

  //Funzione che sceglie una parola random tra quelle nell'array
  function getRndWord(array) {
    return array[Math.floor(Math.random()*array.length)];
  };
