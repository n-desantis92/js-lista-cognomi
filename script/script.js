/* Lista Cognomi
Chiedere all’utente il cognome

inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’

stampa la lista ordinata alfabeticamente

scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */


// Chiedere all’utente il cognome

var cognome = prompt("inserisci il tuo cognome");
cognome = cognome.toLowerCase();
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var lista = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
console.log(lista);

lista.push(cognome);
// stampa la lista ordinata alfabeticamente
lista.sort();
document.getElementById('stampa').innerHTML = lista;

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */
var cognomeTrovato = false;
for (var i = 0; i < lista.length + 1; i++) {
  if (cognome == lista[i]) {
    cognomeTrovato = true;
    cognomeTrovato += parseInt([i]);
    console.log([i]);
    document.getElementById('numero').innerHTML = "La posizione del tuo cognome è " + cognomeTrovato;
  }
}

if (cognomeTrovato) {
  console.log("trovato");
}else {
  console.log("non trovato");
}
