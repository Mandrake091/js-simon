/*Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Buon lavoro e buon divertimento !!! :grande_sorriso: */

let buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click', generateNumbers);
buttonGenera.addEventListener('click', timer);

let numeriGenerati = document.getElementById('numeriGenerati')
let input = document.getElementById('input');
let buttonVerifica = document.getElementById('verifica');
let timerH1 = document.getElementById('timer');
let punteggio = document.getElementById('punteggio');

/*5 numeri casuali da 1 a 100*/
let randomNumbers = [];

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + 1);
}

function generateNumbers() {
    randomNumbers.length = 0;

    while (randomNumbers.length < 5) {
        let numbers = getRandomNumber(1, 100);

        if (!randomNumbers.includes(numbers)) {
            randomNumbers.push(numbers);
            console.log(numbers)
        }
    }
    numeriGenerati.innerText = ` ${randomNumbers.join(', ')}`
}
//




 let secondiDiArrivo = 5;
let secondi=0;



function timer() {
    const countDown = setInterval(timer, 1000);

    console.log(secondi, 'è passato un secondo')
   
    if (secondi <= secondiDiArrivo ) {
        timerH1.innerText =+`${secondi}` 
        secondi++;
    } else {
        clearInterval(timer)
    } 
}

