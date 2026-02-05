//Crea una lista di email di invitati ad una festa.
const mail_list = [
    `Mario@gmail.com`,
    `Giovanna@gmail.com`,
    `Rossella@gmail.com`,
    `Clarissa@gmail.com`,
    `Giuseppe@gmail.com`,
    `Marco@gmail.com`,
    `Valeria@gmail.com`,
    `Giorgio@gmail.com`,
    `Alessio@gmail.com`,
    `Antonio@gmail.com`,
    `Kailla@gmail.com`,
    `Federica@gmail.com`,
]

//Chiedi all’utente la sua email,
const type_mail = prompt(`Verify your email`)

for (let i = 0; i < 12; i++){
    const mail = mail_list[i]

    //controlla che sia nella lista di chi può accedere,
    if (mail == type_mail){
        //stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
        message = `Welcome!`
        break        
    }

    else {
        message = `Try again, your e-mail is not on the list!`
    }

}

console.log(message);

