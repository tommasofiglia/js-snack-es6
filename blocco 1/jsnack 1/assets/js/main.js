/************************** CONSEGNA ****************************
L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore.
****************************************************************/
let numeroUno = Number(prompt("Inserisci un numero"));
let numeroDue = Number(prompt("Inserisci un altro numero"));

console.log(`Il  numero più alto è ${ numeroUno < numeroDue ? `${numeroDue}` : `${numeroUno}`}`);
