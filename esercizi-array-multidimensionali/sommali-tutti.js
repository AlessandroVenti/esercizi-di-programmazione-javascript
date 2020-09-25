/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/


var n = 2;
var m = 3;
var somma = 0;
var matrice = [];


for (i = 0; i < n; i++) {
  matrice[i] = [];
  for (k = 0; k < m; k++) {
    matrice[i][k] = Math.round(Math.random() * (100 - 1) + 1);
    somma += matrice[i][k]
  }
}

console.log(matrice);
console.log( 'somma = ' + somma);
