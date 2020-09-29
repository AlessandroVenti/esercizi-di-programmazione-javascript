/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/


var n = Math.round(Math.random() * (20 - 1) + 1);

console.log(`input :`);
console.log(n);

function inverted(number1)  {
    for (var i = number1 - 1; i > 0; i = i - 1 ) {
      console.log(i);
    }
}

console.log(`output:`);
inverted(n);
