let segundos = document.getElementById("minutos");
let milisegundos = document.getElementById("milisegundos");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

let miliCounter = 0;
let second = 0;
let interval;

function mili() {
    miliCounter++


    if (miliCounter == 100) {

        seconds();
        miliCounter = 0;
    }

    milisegundos.innerHTML = miliCounter;


}

function seconds() {
    second++

    if (second <= 9) {
        segundos.innerHTML = "0" + second;
    }
    else {
        segundos.innerHTML = second;
    }


}

function start() {
    interval = setInterval(mili, 10);
}


function pause() {
    clearInterval(interval);
}


function reset() {
    pause();
    miliCounter = 0;
    second = 0;
    milisegundos.innerHTML = "00";
    segundos.innerHTML = "00";
}

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', pause)
btnReset.addEventListener('click', reset)





