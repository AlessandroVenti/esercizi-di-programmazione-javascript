/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/


var matriceMadre = [];
  matriceMadre[0] = [ 1 , 2];
  matriceMadre[1] = [ 3 , 4];
  matriceMadre[2] = [ 5 , 6];

console.log(matriceMadre);

var matrice = [];
  matrice[0] = [ 1 , 2];
  matrice[1] = [ 3 , 4];
  matrice[2] = [ 5 , 6];

for (i = 0; i < 1; i++) {
    var number2 = matrice[0].pop();
    matrice[0].push(matrice[1][0]);
    matrice[0].push(matrice[2][0]);
    var number3 = matrice[1].shift();
    matrice[1].unshift(number2);
    var number6 = matrice[2].pop();
    matrice[1].push(number6);
    var number5 = matrice[2].pop();
    }
console.log(matrice);
