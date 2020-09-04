/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var secondiTotali = 12560
var secondiOra = 3600;
var minutiOra = 60;
var oreSoluzione = Math.round(secondiTotali / secondiOra);
var decimaleRimanente = 0.48888889;
var minutiSoluzione = Math.round(decimaleRimanente * minutiOra);
var decimaleRimanente2 = 0.3333334;
var secondiSoluzione = Math.round(decimaleRimanente2 * minutiOra);
console.log(` Input : ${secondiTotali}`);
console.log(` Output : ${oreSoluzione} ore, ${minutiSoluzione} minuti e ${secondiSoluzione} secondi.`);
