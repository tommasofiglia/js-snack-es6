/******************  CONSEGNA  **********************
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.
***************************************************/

/**************** DESCRIZIONE DELLE FUNZIONI *******************/

// Funzione che trova l'area di un triangolo qualsiasi.

  const areaTriangolo = (base,altezza) => {
    let areaTriangolo = (base * altezza) / 2 ;
    return areaTriangolo;
  }

// Funzione che applica pitagora per trovare l'ipotenusa di un triangolo rettangolo attraverso il teorema di Pitagora.

const ipotenusaPitagora = (cateto1,cateto2) => {
  let ipotenusa = Math.sqrt( (cateto1**2) + (cateto2**2));
  return ipotenusa;
}

// Funzione che trova il perimetro di un triangolo.

const perimetroTriangolo = (lato1,lato2,lato3) => {
  let perimetro = lato1 + lato2 + lato3 ;
  return perimetro.toFixed(2);
}


let triangolo = {
  base: Number(prompt("Inserisci il valore della base")),
  altezza: Number(prompt("Inserisci il valore dell'altezza"))
};

// Descrivo due variabili per definire base e altezza del triangolo.

let baseTriangolo = triangolo.base;
let altezzaTriangolo = triangolo.altezza;

// Richiamo la funzione per calcolare l'area del triangolo ponendo come argomenti la base e l'altezza scelti per il triangolo.

console.log("L'area del triangolo è pari a " + areaTriangolo(baseTriangolo, altezzaTriangolo));

// Richiamo la funzione che applica Pitagora per trvare l'ipotenusa di un triangolo rettangolo

let ipotenusaTriangolo = ipotenusaPitagora(baseTriangolo,altezzaTriangolo);

// Richiamo la funzione che trova il perimetro del triangolo

console.log("Il perimetro è pari a " + perimetroTriangolo(baseTriangolo,altezzaTriangolo,ipotenusaTriangolo));
