//Gioco dei dadi
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const player = Math.floor(Math.random() * 6) + 1;
const bot = Math.floor(Math.random() * 6) + 1;

console.log(player);
console.log(bot);


//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (player > bot) {
    message = `Congrats, you win`;

}

else if (player < bot) {
    message = `You lost, try again`;

}

else {
    message = `It's a draw, play again`
}

console.log(message);
