/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/


var n = 3
var m = 2
var somma1 = 0, somma2 = 0, somma3 = 0, somma4 = 0, somma5 = 0;
var matrice = [];
var arrayR = [];
var arrayC = [];

for (i = 0; i < m; i++) {
   matrice[i] = [];
   for (j = 0; j < n; j++) {
     matrice[i][j] = Math.round(Math.random() * (100 - 1) + 1);
   }
 }

for (k = 0; k < n; k++) {
  somma1 += matrice[0][k];
  somma2 += matrice[1][k];
}

for (l = 0; l < m; l++) {
  somma3 += matrice[l][0];
  somma4 += matrice[l][1];
  somma5 += matrice[l][2];
  }


arrayR.push(somma1);
arrayR.push(somma2);
arrayC.push(somma3);
arrayC.push(somma4);
arrayC.push(somma5);

console.log(matrice);
console.log(arrayR);
console.log(arrayC);
