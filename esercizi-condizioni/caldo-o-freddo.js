/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var days = [10,-2,-8,22,15,-6,7];
var max = Math.max(days[0],days[1],days[2],days[3],days[4],days[5],days[6]);
var min = Math.min(days[0],days[1],days[2],days[3],days[4],days[5],days[6]);

for (i = 0; i < days.length; i++){
  if (days[i] === max) {
   for (j = 0; j < days.length; j++) {
     if (days[j] === min) {
       console.log(`giornata piu calda = ${days[i]}, giornata piu fredda = ${days[j]}`);
       break;
     }
   }
  }
}

// usando switch invece di if

var days = [10,-2,-8,22,15,-6,7];
var max = Math.max(days[0],days[1],days[2],days[3],days[4],days[5],days[6]);
var min = Math.min(days[0],days[1],days[2],days[3],days[4],days[5],days[6]);

for (i = 0; i < days.length; i++) {
   switch (days[i]) {
     case (max) :
        for (j = 0; j < days.length; j++) {
          switch (days[j]) {
            case (min) :
             console.log(`giornata piu calda: ${days[i]}, giornata piu fredda = ${days[j]}`);
          }
        }
   }
}
