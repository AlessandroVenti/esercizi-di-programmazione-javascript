/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

var array = [];

for (let i = 0; i < 100; i++) {
  array.push(Math.round(Math.random() * (50 - 1) + 1));
}

console.log(array);

function getNumber(number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % number === 0) {
      array[i] = 0;
    }
  }
}

function repeatUntil0 (number) {
  for (let k = 0; k < array.length; k++) {
    if (array[k] !== 0) {
      getNumber(Number(prompt('Inserisci Numero...')));
      k = 0;
    }
  }
  console.log(array);
}

repeatUntil0();
