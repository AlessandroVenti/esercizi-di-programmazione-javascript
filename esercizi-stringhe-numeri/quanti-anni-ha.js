/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var currentAge = 2020;
var birthDate = 1991;
var year100 = 100;
var myAge = currentAge - birthDate;
var for100 = year100 - myAge;
console.log(`eta = ${myAge} , anni rimanenti = ${for100}`);
