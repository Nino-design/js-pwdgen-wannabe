//DICHIARAZIONE VARIABILI

const nome = prompt('Scrivi il tuo nome!');
const cognome = prompt('Scrivi il tuo cognome!');
const colore = prompt('Scrivi il tuo colore preferito!');

//RICHIAMO ID E ASSEGNAZIONE VALORI UTENTE

document.getElementById('demo').innerHTML = `${nome} ${cognome} ${colore} 21`;