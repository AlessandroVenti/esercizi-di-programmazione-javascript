/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

const date = {
  days : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
 months: [1,2,3,4,5,6,7,8,9,10,11,12],
  years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  }

  function dateIsTrue(key1,key2,key3) {
    for (i = 0; i < date.days.length; i++) {
       if (key1 === date.days[i]) {
         for (j = 0; j < date.months.length; j++) {
           if (key2 === date.months[j]) {
             for(k = 0; k < date.years.length; k++) {
               if (key3 === date.years[k]) {
                 return console.log(true);
               } else {
                   return console.log(false);
               }
             }
           }
         }
       }
    }
  }

  dateIsTrue(Number(prompt('Inserisci giorno...')),Number(prompt('Inserisci mese...')),Number(prompt('Inserisci anno...')));
