/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

var array = [3,7,-2,5,8,1,2,5,6,-4];
var deletedArray = [];
var invertedArray = [];
var tempmax = array[0];
var tempmin = array[0];
var max = array[0];
var min = array[0];
var indice = 0;
var lunghezza = array.length;
console.log(array);

//trovare numero maggiore
for (let i = 0; i < lunghezza; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

// trovare numero minore
for (let i = 0; i < lunghezza; i++) {
  if ( array[i] < min) {
    min = array[i];
  }
}

// ordinare l'array in ordine decrescente

function decrescente() {
  for (let k = 0; k < lunghezza; k++) {
   for (let i = 0; i < array.length; i++) {
     if (array[i] > tempmax) {
      tempmax = array[i];
      indice = i;
     }
   }
    invertedArray.push(tempmax);
    array.splice(indice, 1);
    tempmax = min;
  }
  console.log(invertedArray);
}

//ordinare l'array in ordine crescente

function crescente() {
  for (let k = 0; k < lunghezza; k++) {
   for (let i = 0; i < array.length; i++) {
     if (array[i] < tempmin) {
      tempmin = array[i];
      indice = i;
     }
   }
    invertedArray.push(tempmin);
    array.splice(indice, 1);
    tempmin = max;
  }
  console.log(invertedArray);
}
 

function choose(element) {
  if (element === 'decrescente') {
    decrescente();
  }
  else {
    crescente();
  }
}

choose(String(prompt('Decrescente o crescente?')));
