/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

var string;
var theString;
var count = 0;
var k;


function fromStringToArray(element1) {
   string = element1.replace(/\W/g, "");
   theString = Array.from(string).map(String);
   k = theString.length - 1;
}

function countingCharacters(theString) {
  for (i = 0; i < (theString.length - 1); i++) {
   if (theString[i] === theString[k]) {
    count += 1;
    k = k - 1;
  } else {
    return console.log('false');
    }
  }
}

function finalCondition(element1) {
  fromStringToArray(element1);
  countingCharacters(theString);
  if (count === theString.length - 1) {
  console.log('True');
}
}

finalCondition(`ai lati d'italia`);
