/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/


var n = Math.round(Math.random() * (10 - 1) + 1);
var fattoriale = 1;

console.log(n);

function factorial(number1) {
    for (var i = number1 ; i > 0; i = i - 1) {
        fattoriale = fattoriale * i ;
       }
  return console.log(fattoriale);
}

factorial(n);
