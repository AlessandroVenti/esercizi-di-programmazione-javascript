/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/


var n = Math.round(Math.random() * (5-1) + 1);
var m = Math.round(Math.random() * (5-1) + 1);

console.log(`n = ${n}, m = ${m}`);

function equality(number1,number2) {
  if (number1 === number2) {
    return console.log('TRUE');
  } return console.log('FALSE');
}

equality(n,m);
