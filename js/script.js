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
buttonGenera.addEventListener('click', start);

let numeriGenerati = document.getElementById('numeriGenerati')
let input = document.getElementById('input');
let buttonVerifica = document.getElementById('verifica');
buttonVerifica.addEventListener('click', controllo)
let timerH1 = document.getElementById('timer');
let punteggio = document.getElementById('punteggio');
let errorH1 = document.getElementById('error')

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
        }
    }
    console.log('numeri random', randomNumbers)
    numeriGenerati.innerText = `Memorizza! ${randomNumbers.join(', ')}`
}
//
//funzione controllo numeri



rightNumbers = [];

function controllo() {

    let input = document.getElementById('input').value;
    input = parseInt(input);
    score = 0;

    for (let i = 0; i < randomNumbers.length; i++) {
        console.log(randomNumbers)
        if (randomNumbers.length - 1 <= rightNumbers.length) {
            errorH1.innerText = `Hai vinto!`
            console.log('hai vinto');
            score++
        }
    }


    if (randomNumbers.includes(input)) {
        score++
        punteggio.innerText = `Punteggio: ${score}`;
        console.log(input);
        rightNumbers.push(input);
        console.log('numeri giusti', rightNumbers);
    } else {
        errorH1.innerText = `Questo numero è errato! ${input}`
    }
}













//funzione timer



function start() {
    errorH1.innerText = '';
    let secondiDiArrivo = 5;
    let secondi = 0;

    let timer = setInterval(countDown, 500)

    function countDown() {

        secondi++;
        timerH1.innerText = `Timer: ${secondi}`
        if (secondi >= secondiDiArrivo) {
            numeriGenerati.innerText = '';
            clearInterval(timer)
            clearInterval(countDown)
        }
    }
}