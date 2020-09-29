/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/


var m = Math.round(Math.random() * (9999 - 1) + 1);
var n = m.toString();

console.log(m);

function countNumber (number1)  {
   switch(number1.length) {
     case 1 :
          console.log(`1 cifra`);
     break;

     case 2 :
          console.log(`2 cifre`);
     break;

     case 3 :
          console.log(`3 cifre`);
     break;

     case 4 :
          console.log(`4 cifre`);
   }
}

countNumber(n);
