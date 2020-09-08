/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


var x = Math.random (), y = x * (6-1) +1, z = Math.round(y);
var a = Math.random (), b = a * (6-1) +1, c = Math.round(b);

console.log(z , c );

var n = 10;
var player1total = 0;
var player2total = 0;

for (var player1count = 0; player1count <= n; player1count ++) {
     player1total += z
}

for (var player2count = 0; player2count <= n; player2count ++) {
     player2total += c
}

console.log( `Giocatore 1 = ${player1total}`);
console.log( `Giocatore 2 = ${player2total}`);

if ( player1total > player2total) {
  console.log(`Il giocatore 1 ha vinto, totalizzando ${player1total} punti! `);
  
} else if (player1total < player2total) {
  console.log(`Il giocatore 2 ha vinto, totalizzando ${player2total} punti! `);
  
} else if (player1total == player2total) {
  console.log(`Pareggio! I due giocatori hanno totalizzato entrambi ${player1total} punti! `);
  
}
