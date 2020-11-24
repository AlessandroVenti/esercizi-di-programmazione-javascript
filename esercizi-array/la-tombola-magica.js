/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var casual = [Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),Math.round(Math.random() * (90 - 1) + 1),];
var mynumbers = [48,76,52,37,8,90,86,29,56,75];
var count = 0;


// Togliere ripetizioni da casual
for (let i = 0; i < casual.length; i++) {
  for (let k = 0; k < casual.length; k++) {
    if (i === k) {
    }
    else if (i !== k && casual[i] === casual[k]) {
      casual[i] = Math.round(Math.random() * (90 - 1) + 1);
    }
  }
}

// numeri che combaciano
for (let i = 0; i < mynumbers.length; i++) {
  for (let k = 0; k < casual.length; k++) {
    if (mynumbers[i] === casual[k]) {
      count += 1;
    }
  }
}

console.log(mynumbers);
console.log(casual);
console.log(count);

switch (count) {

  case 0:
  case 1:
     alert(`Hai perso!`);
     break;

  case 2:
     alert(`ambo!`);
     break;

  case 3:
     alert(`Terna!`);
     break;

  case 4:
     alert(`Quaterna!`);
     break;

  case 5:
     alert(`Cinquina!`);
     break;

  case mynumbers.length:
     alert(`Tombola!`);
}
