/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email

- creo una lista array con dentro le email 
- creo un prompt dove chiedo la email all'utente 
- fare un check con un valore booleano con un ciclo for
-stampare il risultato booleano 

*/

let listaMail = [
    "pippo@gmail.com",
    "giacomo@gmail.com",
    "gianni@gmail.com",
    "ser@gmail.com"
]

let newMail = prompt("Inserisci la tua email", "gianni@gmail.com");

let isNewMailEmpty = false;

for ( let i = 0; i <= listaMail.length; i++ ){
   if (newMail == listaMail[i])
   isNewMailEmpty = true
   

}

if (isNewMailEmpty)
    console.log ("Fai parte della lista")
else 
    console.log ("Non fai parte della lista")

