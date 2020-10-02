/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

var a;
var b;
var n;
var fromAtoN, fromBtoN, lessfromAtoN, lessfromBtoN;

function collectAndCreate(element1,element2,element3) {
   a = element1;
   b = element2;
   n = element3;
   fromAtoN = [];
   fromBtoN = [];
   lessfromAtoN = [];
   lessfromBtoN = [];
   console.log(`a = ${a}, b = ${b}, n = ${n}`);
}

function createDistancefromAtoN(a,n) {
  for (j = a + 1; j <= n; j++) {
    fromAtoN.push(j);
  }
}

function createDistancefromBtoN(b,n) {
  for (k = b + 1; k <= n; k++) {
    fromBtoN.push(k);
  }
}

function createLessDistancefromAtoN(a,n) {
  for (p = a - 1; p >= n; p--) {
    lessfromAtoN.push(p);
  }
}

function createLessDistancefromBtoN(b,n) {
  for (q = b - 1; q >= n; q--) {
    lessfromBtoN.push(q);
  }
}

function conditionFor0(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (fromAtoN.length === lessfromBtoN.length && fromAtoN.length !== 0 && lessfromBtoN.length !== 0 ) {
      return console.log(0);
  } else if(fromBtoN.length === lessfromAtoN.length && fromBtoN.length !==0 && lessfromAtoN.length !== 0) {
      return console.log(0);
  }
}

function conditionFor1(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (lessfromAtoN.length == 0 && lessfromBtoN.length == 0) {
     if (fromBtoN.length < fromAtoN.length) {
      return console.log(1);
     }
  } else if (fromAtoN.length == 0 && fromBtoN == 0) {
     if (lessfromBtoN.length < lessfromAtoN.length) {
       console.log(1);
     }
  } else if (fromAtoN.length == 0 && fromBtoN.length !== 0 ) {
     if (fromBtoN.length < lessfromAtoN.length) {
      return console.log(1);
     }
  } else if (fromAtoN.length !== 0 && fromBtoN.length == 0) {
     if (lessfromBtoN.length < fromAtoN.length) {
       return console.log(1);
     }
  }
}

function conditionFor2(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (lessfromAtoN.length == 0 && lessfromBtoN.length == 0) {
     if (fromAtoN.length < fromBtoN.length) {
      return console.log(2);
     }
  } else if (fromAtoN.length == 0 && fromBtoN == 0) {
     if (lessfromAtoN.length < lessfromBtoN.length) {
       return console.log(2);
     }
  } else if (fromAtoN.length == 0 && fromBtoN.length !== 0 ) {
     if (lessfromAtoN.length < fromBtoN.length) {
       return console.log(2);
     }
  } else if (fromAtoN.length !== 0 && fromBtoN.length == 0) {
     if (fromAtoN.length < lessfromBtoN.length) {
       return console.log(2);
     }
 }
}

function theFinalRound(element1,element2,element3) {
         collectAndCreate(element1,element2,element3);
         createDistancefromAtoN(a,n);
         createDistancefromBtoN(b,n);
         createLessDistancefromAtoN(a,n);
         createLessDistancefromBtoN(b,n);
         conditionFor0(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
         conditionFor1(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
         conditionFor2(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
}

  theFinalRound(0,30,20);


// VARIANTE CHE SIMULI GIOCO TRA DUE UTENTI

var a;
var b;
var n;
var fromAtoN, fromBtoN, lessfromAtoN, lessfromBtoN;

function collectAndCreate(element1,element2,element3) {
   a = element1;
   b = element2;
   n = element3;
   fromAtoN = [];
   fromBtoN = [];
   lessfromAtoN = [];
   lessfromBtoN = [];
   console.log(`a = ${a}, b = ${b}, n = ${n}`);
}

function createDistancefromAtoN(a,n) {
  for (j = a + 1; j <= n; j++) {
    fromAtoN.push(j);
  }
}

function createDistancefromBtoN(b,n) {
  for (k = b + 1; k <= n; k++) {
    fromBtoN.push(k);
  }
}

function createLessDistancefromAtoN(a,n) {
  for (p = a - 1; p >= n; p--) {
    lessfromAtoN.push(p);
  }
}

function createLessDistancefromBtoN(b,n) {
  for (q = b - 1; q >= n; q--) {
    lessfromBtoN.push(q);
  }
}

function conditionFor0(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (fromAtoN.length === lessfromBtoN.length && fromAtoN.length !== 0 && lessfromBtoN.length !== 0 ) {
      return console.log('Pareggio!');
  } else if(fromBtoN.length === lessfromAtoN.length && fromBtoN.length !==0 && lessfromAtoN.length !== 0) {
      return console.log('Pareggio!');
  }
}

function conditionFor1(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (lessfromAtoN.length == 0 && lessfromBtoN.length == 0) {
     if (fromBtoN.length < fromAtoN.length) {
      return console.log('Giocatore2 ha vinto!');
     }
  } else if (fromAtoN.length == 0 && fromBtoN == 0) {
     if (lessfromBtoN.length < lessfromAtoN.length) {
       console.log('Giocatore2 ha vinto!');
     }
  } else if (fromAtoN.length == 0 && fromBtoN.length !== 0 ) {
     if (fromBtoN.length < lessfromAtoN.length) {
      return console.log('Giocatore2 ha vinto!');
     }
  } else if (fromAtoN.length !== 0 && fromBtoN.length == 0) {
     if (lessfromBtoN.length < fromAtoN.length) {
       return console.log('Giocatore2 ha vinto!');
     }
  }
}

function conditionFor2(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN) {
  if (lessfromAtoN.length == 0 && lessfromBtoN.length == 0) {
     if (fromAtoN.length < fromBtoN.length) {
      return console.log('Giocatore1 ha vinto!');
     }
  } else if (fromAtoN.length == 0 && fromBtoN == 0) {
     if (lessfromAtoN.length < lessfromBtoN.length) {
       return console.log('Giocatore1 ha vinto!');
     }
  } else if (fromAtoN.length == 0 && fromBtoN.length !== 0 ) {
     if (lessfromAtoN.length < fromBtoN.length) {
       return console.log('Giocatore1 ha vinto!');
     }
  } else if (fromAtoN.length !== 0 && fromBtoN.length == 0) {
     if (fromAtoN.length < lessfromBtoN.length) {
       return console.log('Giocatore1 ha vinto!');
     }
 }
}

function theFinalRound(element1,element2,element3) {
         collectAndCreate(element1,element2,element3);
         createDistancefromAtoN(a,n);
         createDistancefromBtoN(b,n);
         createLessDistancefromAtoN(a,n);
         createLessDistancefromBtoN(b,n);
         conditionFor0(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
         conditionFor1(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
         conditionFor2(fromAtoN,fromBtoN,lessfromAtoN,lessfromBtoN);
}

  theFinalRound(Number(prompt('Giocatore 1: inserisci un numero...')),Number(prompt('Giocatore 2: inserisci un numero...')),Math.round(Math.random() *(100 - 1) + 1));
