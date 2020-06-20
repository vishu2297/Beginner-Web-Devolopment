const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const hrs=document.querySelector('.hrs');
const mins=document.querySelector('.mins');
const secs=document.querySelector('.secs');

let intervalId;
let timerTime=00;

stopButton.style.display='none';

function startTimer(){
    intervalId=setInterval(incrementTimer, 1000);

    startButton.style.display='none';
    stopButton.style.display='inline-block';
}
function stopTimer(){
    clearInterval(intervalId);

    stopButton.style.display='none';
    startButton.style.display='inline-block';
}
function resetTimer(){
    stopTimer();
    timerTime=00;
    secs.innerText='00';
    mins.innerText='00';
    // hrs.innerText='00';
}

function incrementTimer(){
    timerTime++;

    // const numberOfHrs=Math.floor(timerTime/60);
    const numberOfMins=Math.floor(timerTime/60);
    const numberOfSecs=timerTime%60;

    secs.innerText=zeropadding(numberOfSecs);
    mins.innerText=zeropadding(numberOfMins);
    // hrs.innerText=zeropadding(numberOfHrs);
}

function zeropadding(number){
    return number < 10 ? `0${number}` : `${number}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);