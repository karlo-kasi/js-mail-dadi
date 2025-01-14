/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/




let numero1 = Math.floor(Math.random() * 5)+ 1;
let numero2 = Math.floor(Math.random() * 5)+ 1;

console.log(numero1, numero2)

if (numero1 > numero2){
    console.log("Il giocatore vince")
} else if (numero1 < numero2){
    console.log("Il computer vince")
} else {
    console.log("Pareggio")
}
    


