/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


var n = 20;

function randomForYou(number1) {
  return Math.round(Math.random() * (number1 - 0 ) + 0);
}

console.log(randomForYou(n));
