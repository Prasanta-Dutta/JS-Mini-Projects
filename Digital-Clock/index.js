const showTime = document.getElementById('time');
console.log(showTime);

const timeBar = document.getElementById('time-bar');
const stopwatchBar = document.getElementById('stopwatch-bar');
const timerBar = document.getElementById('timer-bar');

const timeBox = document.getElementById('time-box');
const stopwatchBox = document.getElementById('stopwatch-box');
const timerBox = document.getElementById('timer-box');


let inervalID = setInterval(() => {
    let currTime = new Date();
    showTime.innerHTML = currTime.toLocaleTimeString();
}, 1000);


stopwatchBar.addEventListener("click", (e) => {
    clearInterval(inervalID);
    timeBar.classList.remove('active');
    timeBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    stopwatchBox.classList.remove('d-none');
    stopwatchBar.classList.add('active');
});

timeBar.addEventListener("click", (e) => {
    
    stopwatchBar.classList.remove('active');
    stopwatchBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    timeBox.classList.remove('d-none');
    timeBar.classList.add('active');

    inervalID = setInterval(() => {
        let currTime = new Date();
        showTime.innerHTML = currTime.toLocaleTimeString();
    }, 1000);
});