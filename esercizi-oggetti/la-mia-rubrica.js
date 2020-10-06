/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

//contatti

var marioRossi = {
  nome: 'Mario',
  cognome: 'Rossi',
  numero: '111111111'
}

var lucaVerdi = {
  nome: 'Luca',
  cognome: 'Verdi',
  numero: '222222222'
}

var francoRossi = {
  nome: 'Franco',
  cognome: 'Rossi',
  numero: '333333333'
}

var marcoVerdi = {
  nome: 'Marco',
  cognome: 'Verdi',
  numero: '444444444'
}

var francescaBianchi = {
  nome: 'Francesca',
  cognome: 'Bianchi',
  numero: '555555555'
}

var maurizioNeri = {
  nome: 'Maurizio',
  cognome: 'Neri',
  numero: '666666666'
}

//lista contatti
var contactList = [marioRossi,lucaVerdi,francoRossi,marcoVerdi,francescaBianchi,maurizioNeri];

//aggiungere un contatto

function addContact(key1,key2,key3) {
  var newContact = {
    nome: key1,
    cognome: key2,
    numero: key3
  }
  contactList.push(newContact);
}

//modificare un contatto
function modifyNumberofContact2(key3){
  contactList[n].numero = key3;
}

function modifyNumberofContact(key3) {
  contactList[i].numero = key3;
}

function askName(key1) {
  for (n = 0; n < contactList.length; n++) {
    if (key1 === contactList[n].nome )
     return modifyNumberofContact2(String(prompt(` Inserisci nuovo numero di ${contactList[n].nome } ${contactList[n].cognome}`)))
  }
}

function modifyContact (key2){
  for (i = 0; i < contactList.length; i++) {
    if (key2 === contactList[i].cognome) {
      for (m = i; m < contactList.length; m++) {
        if (contactList[i].cognome === contactList[m].cognome) {
          return askName(String(prompt(`Sono presenti più contatti con questo cognome! Digita il nome `)));
        } else {
          return modifyNumberofContact(String(prompt(` Inserisci nuovo numero di ${contactList[i].nome } ${contactList[i].cognome}`)));
          }
      }
    }
  }
}
// cancellare un contatto
function deleteContact(key2) {
  for(k = 0; k < contactList.length; k++) {
    if(key2 === contactList[k].cognome) {
      delete contactList[k];
    }
  }
}

//ricercare un contatto
function researchContact3(key1) {
  for (o = 0; o < contactList.length; o++) {
    if (key1 === contactList[o].nome) {
      return console.log(contactList[o]);
    }
  }
}

function researchContact(key2) {
  for (j = 0; j < contactList.length; j++) {
    if(key2 === contactList[j].cognome) {
      for (l = j; l < contactList.length; l++)
        if (contactList[j].cognome === contactList[l].cognome) {
          return researchContact3(String(prompt(`Sono presenti più contatti con questo cognome! Digita il nome `)));
        } else {
      return console.log(contactList[j]);
          }
    }
  }
}

//unione metodi 
function welcomeToContacts(string1) {
  if (string1 === 'visualizzare') {
     console.log(contactList);
  } else if (string1 === 'aggiungere') {
       addContact(String(prompt(` Inserisci nome del contatto da aggiungere`)),String(prompt(` Inserisci cognome del contatto da aggiungere`)),String(prompt(` Inserisci numero del contatto da aggiungere`)));
        console.log(contactList);
    } else if (string1 === 'rimuovere')  {
        deleteContact(String(prompt('Inserisci cognome del contatto da eliminare..')));
         console.log(contactList);
      } else if (string1 === 'ricercare')  {
         researchContact(String(prompt('Inserisci cognome del contatto da ricercare..')));
        } else if (string1 === 'modificare') {
          modifyContact(String(prompt(` Inserisci cognome del contatto da modificare`)));
          console.log(contactList);
         }
}

welcomeToContacts(String(prompt(`Benvenuto nella tua rubrica! Cosa vuoi fare? Visualizzare la tua rubrica? Oppure aggiungere ,rimuovere, ricercare o modificare un contatto?`)));
