/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/


var a = Math.round(Math.random() * (10 - 1) + 1);
var b = Math.round(Math.random() * (10 - 1) + 1);
var c = Math.round(Math.random() * (10 - 1) + 1);

function maxNumber(number1, number2, number3) {
  return Math.max(number1, number2, number3);
}

function minNumber(number1, number2, number3) {
  return Math.min(number1, number2, number3);
}
console.log(`input: a = ${a}, b = ${b}, c = ${c}`);

console.log(`Minore = ${minNumber(a,b,c)}, Maggiore = ${maxNumber(a,b,c)}`);


//variante con array

var array = [Math.round(Math.random() * (10 - 1) + 1), Math.round(Math.random() * (10 - 1) + 1), Math.round(Math.random() * (10 - 1) + 1)];

console.log(`input = ${array}`);
console.log(`Minore = ${minNumber(array[0],array[1],array[2])}, Maggiore = ${maxNumber(array[0],array[1], array[2])}`);
