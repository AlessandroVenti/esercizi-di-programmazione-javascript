/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/


var n = 10;
var array1 = [];
var array2 = [];
var array3 = [];
var operazione = 'moltiplicazione';

for (var a = 0; a < n; a++) {
  array1.push(Math.round(Math.random() * (10-1) + 1));
  array2.push(Math.round(Math.random() * (10-1) + 1));
}

console.log('array 1 : ' + array1);
console.log('array 2 : ' + array2);

switch(operazione) {

  case "addizione" :
    for ( var b = 0; b < n ; b++) {
          array3.push(array1[b] + array2[b]);
     }
       console.log('addizione = ' + array3);
       break;

  case "sottrazione" :
    for ( var b = 0; b < n ; b++) {
          array3.push(array1[b] - array2[b]);
   }
       console.log('sottrazione = ' +array3);
       break;

  case "moltiplicazione" :
    for ( var b = 0; b < n ; b++) {
          array3.push(array1[b] * array2[b]);
   }
       console.log('moltiplicazione = ' + array3);
       break;

  case "divisione" :
    for ( var b = 0; b < n ; b++) {
          array3.push(array1[b] - array2[b]);
   }
       console.log('divisione = ' + array3);
 }
