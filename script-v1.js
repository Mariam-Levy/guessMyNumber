'use strict';

let score = 20; // score = puntaje | para que el valor comience con un puntaje de 20
let highscore = 0; // highscore = puntuacion mas alto | el record comienza en 0

//Para generar un numero aleatorio entre el 1 y el 20 y a la vez almacenarlos en una variable:
let secretNumber = Math.trunc(Math.random() * 20) + 1; 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if(!guess) {  //cuando el ususario no ingreso un numero
        displayMessage('No es un numero! ❌');

    } else if (guess === secretNumber) { //cuando el usuario introdujo el numero correcto.
        displayMessage('Numero correcto! ✅'); // arroja el mensaje que el usuario atino el numero
        document.querySelector('.number').textContent = secretNumber; //muestra el numero secreto solo cuando sea el correcto.

        //Manipular CSS desde JS:
        document.querySelector('body').style.backgroundColor = '#80b918';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) { // cuando el numero es diferente al numero secreto
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Muy alto! ⬆' : 'Muy bajo! ⬇'); // cuando el numero introducido es mayor al numero secreto entonces sale el mensaje que el numero es muy alto, de lo contrario muesta el mensaje que el numero es muy bajo.
            score = score - 1; // resta un punto del score
            document.querySelector('.score').textContent = score; // muestra el nuevo valor del score
        } else {
            displayMessage('Perdiste el juego 😫')
            document.querySelector('.score').textContent = 0; // para que el puntaje se muestre en 0, cuando se pierde el juego
            document.querySelector('body').style.backgroundColor = '#d00000'; 
        }
    } 
});



document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    displayMessage('Empieza a adivinar...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#1f2421';
    document.querySelector('.number').style.width = '15rem';
});

