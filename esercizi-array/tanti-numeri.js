/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/


var array = [3, 5, 10, 2, 8];
var media = (array[0] + array[1] + array[2] + array[3] + array[4]) / 5;

var minorNumber = array.filter(function minorNumber(element) {
  return (element < media);
})

var majorNumber = array.filter(function majorNumber(element) {
  return (element > media);
})

console.log(`media = ${media} , valori minori = ${minorNumber}, valori maggiori = ${majorNumber}`);
console.log(`quantità valori minori della media = ${minorNumber.length}, quantità valori maggiori della media = ${majorNumber.length}`);
