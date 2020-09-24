/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var matrice = [];
  matrice[0] = [Math.round(Math.random() * ((100-1) + 1))];
  matrice[1] = [Math.round(Math.random() * ((100-1) + 1))];
  matrice[2] = [Math.round(Math.random() * ((100-1) + 1))];
  matrice[3] = [Math.round(Math.random() * ((100-1) + 1))];
console.log(matrice);
