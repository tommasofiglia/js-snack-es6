/****************************** CONSEGNA **************************
L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.
******************************************************************/

let parolaUno = prompt("Inserisci la prima parola");
let parolaDue = prompt("Inserisci la seconda parola");

const longestWord = (string1,string2) => {
  if (string1.length > string2.length) {
    console.log(`La prima parola (${parolaUno}) è più lunga della seconda parola (${parolaDue})`);
  } else if (string1.length < string2.length) {
    console.log(`La seconda parola (${parolaDue}) è più lunga della prima parola (${parolaUno})`);
  } else {
    console.log(`Le due parole (${parolaUno}) e (${parolaDue}) hanno la stessa lunghezza`);
  }
}

longestWord(parolaUno,parolaDue);
