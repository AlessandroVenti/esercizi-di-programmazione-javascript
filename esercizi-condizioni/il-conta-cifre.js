/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var x = Math.random();
var y = x * (9999 - 1) +1;
var z = Math.floor(y)
console.log('Numero = ' +z);
var a = z.toString();
if (a.length==1) {
console.log('1 cifra');
} else if (a.length==2) {
  console.log('2 cifre');
} else if (a.length==3) {
  console.log('3 cifre');
} else if (a.length==4) {
  console.log('4 cifre');
}
