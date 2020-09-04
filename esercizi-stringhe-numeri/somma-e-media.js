/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

var a = 6;
var b = 12;
var c = 4;
var d = 8;
var e = 2;
var numeroVariabili = 5;
var somma = a + b + c + d + e;
var media = Math.round(somma / numeroVariabili);
console.log(`somma = ${somma} , media = ${media}`);
