const showTime = document.getElementById('time');
console.log(showTime);

const timeBar = document.getElementById('time-bar');
const stopwatchBar = document.getElementById('stopwatch-bar');
const timerBar = document.getElementById('timer-bar');

const timeBox = document.getElementById('time-box');
const stopwatchBox = document.getElementById('stopwatch-box');
const timerBox = document.getElementById('timer-box');

const stopwatchStartBtn = document.getElementById('stopwatchStartBtn');
const stopwatchStopBtn = document.getElementById('stopwatchStopBtn');
const stopwatchResetBtn = document.getElementById('stopwatchResetBtn');
const stopwatch = document.getElementById('stopwatch');


let intervalID = setInterval(() => {
    let currTime = new Date();
    let hh = currTime.getHours().toString().padStart(2, "0");
    let mm = currTime.getMinutes().toString().padStart(2, "0");
    let ss = currTime.getSeconds().toString().padStart(2, "0");

    let ampm = currTime.toLocaleTimeString('en-IN').split(' ')[1];

    showTime.innerHTML = `${hh}:${mm}:${ss} ${ampm}`;
}, 1000);


stopwatchBar.addEventListener("click", (e) => {
    clearInterval(intervalID);
    intervalID = null;
    timeBar.classList.remove('active');
    timeBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    stopwatchBox.classList.remove('d-none');
    stopwatchBar.classList.add('active');
});

timeBar.addEventListener("click", (e) => {
    clearInterval(intervalID);
    intervalID = null;
    
    stopwatchBar.classList.remove('active');
    stopwatchBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    timeBox.classList.remove('d-none');
    timeBar.classList.add('active');

    let hh, mm, ss, ampm;   //  Better if define inside setInterval(), bcs garbage collected after every second.

    intervalID = setInterval(() => {
        let currTime = new Date();
        // showTime.innerHTML = currTime.toLocaleTimeString();
        hh = currTime.getHours().toString().padStart(2, "0");
        mm = currTime.getMinutes().toString().padStart(2, "0");
        ss = currTime.getSeconds().toString().padStart(2, "0");

        ampm = currTime.toLocaleTimeString('en-IN').split(' ')[1];

        showTime.innerHTML = `${hh}:${mm}:${ss} ${ampm}`;
    }, 1000);
});

stopwatchStartBtn.addEventListener("click", (e) => {
    let startTimeStamp = Date.now();
    let tillNowTimeStamp;
    let displayTime;

    let time = stopwatch.textContent.split(':');

    stopwatchStartBtn.classList.add('d-none');
    stopwatchStopBtn.classList.remove('d-none');


    intervalID = setInterval(() => {
        tillNowTimeStamp = Date.now();
        displayTime = new Date(tillNowTimeStamp-startTimeStamp).getSeconds();  //   Time in seconds 
        // displayTime = Math.floor((tillNowTimeStamp - startTimeStamp) / 1000);
        console.log(displayTime);

        let hh = parseInt(time[0]);
        let mm = parseInt(time[1]);
        let ss = parseInt(time[2]);   //  After every second garbage collected

        displayTime = displayTime + (hh*3600) + (mm*60) + ss;
        hh = Math.floor(displayTime/3600).toString();
        mm = Math.floor((displayTime%3600) / 60).toString();
        ss = Math.floor(displayTime%60).toString();
        stopwatch.innerHTML = `${hh.padStart(2,"0")}:${mm.padStart(2,"0")}:${ss.padStart(2,"0")}`;
    }, 1000);
})


stopwatchResetBtn.addEventListener("click", (e) => {
    clearInterval(intervalID);
    intervalID = null;
    stopwatch.innerHTML = "00:00:00";
});

stopwatchStopBtn.addEventListener("click", (e) => {
    clearInterval(intervalID);
    intervalID = null;

    stopwatchStartBtn.classList.remove('d-none');
    stopwatchStopBtn.classList.add('d-none');    
});