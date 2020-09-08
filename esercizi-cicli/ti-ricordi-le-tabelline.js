/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

// Svolto con numero casuale per la tabellina

var x = Math.random();
var y = x * (100 - 1 ) + 1;
var z = Math.floor(y);

var input = z;
var max = 1000
var final = ``;

for (var i = 0; i<max; i += input) {
   final += i + ' ' ;
}

console.log(final);
