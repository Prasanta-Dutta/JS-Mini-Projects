# JS-Mini-Projects
Javascript + Mini Projects + Practice Concept + DOM Practice


### This repository contains many Mini Projects that help to practice Javascrit concepts and also help Manipulating DOM.


### 1. Project - Color-Changer : Solution
##### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="./favicon-32x32.png">

    <title>Color Changer</title>
</head>
<body class="background">
    <div class="main-container d-flex justify-content-center align-items-center flex-column">
        <h1 class="mb-5">Let's Pick Your Own Color &#x200D;&#x1F3A8;</h1>
        <div class="container d-flex justify-content-center gap-5 p-3 mt-5">
            <div class="color-box  bg-info"></div>
            <div class="color-box bg-success"></div>
            <div class="color-box bg-warning"></div>
            <div class="color-box bg-danger"></div>
        </div>
    </div>
</body>
</html>
```

##### Javascript
```
let colorBox = document.querySelectorAll('.color-box');
let body = document.querySelector('body');

console.log(typeof colorBox);
console.log(colorBox);

colorBox.forEach((cb) => {
    // 1. Onclick:
    cb.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        
        let bgColor = getComputedStyle(e.target).backgroundColor;
        console.log(bgColor);

        body.style.backgroundColor = bgColor;
    });


    // 2. OnMouseLeave:
    cb.addEventListener("mouseleave", (e) => {
        body.style.backgroundColor = "#212121";

    });
});
```


### 2. Project - BMI-Calculator : Solution
##### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="./icons8-calculator-48.png">
    <link rel="stylesheet" href="./index.css">
    <title>BMI Calculator</title>
</head>
<body class="dark-mode">
    
    <div class="main-container p-5">
        <div class="container bmi-container border border-info p-5">
            <h2 class="heading pb-5">BMI Calculator</h2>
            <div class="input-data ">
                <form action="">
                    <label for="height">Height in CM</label>
                    <input type="text" name="height" id="height">
                    <br><br>

                    <label for="weight">Weight in KG</label>
                    <input type="text" name="weight" id="weight">
                    <br><br>

                    <div class="result p-2 text-center" id="result"></div>

                    <button type="submit" class="btn btn-primary">Calculate</button>

                </form>
            </div>
            <h3 class="pt-5">BMI Guide</h3>
            <div class="details py-3">
                <p>Under Weight = Less than 18.5</p>
                <p>Normal Range = 18.5 to 24.9</p>
                <p>Over Weight = Grater than 24.9</p>
            </div>
        </div>
    </div>
</body>
</html>
```

##### Javascript
```
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const heightElement = document.querySelector('#height');
    const weightElement = document.querySelector('#weight');
    const resultElement = document.querySelector('#result');

    const height = parseFloat(heightElement.value);
    const weight = parseFloat(weightElement.value);
    let height_weight_flag = true;  //  don't use const bcs reassign in if{} block

    console.log(`Height: ${typeof height}, ${height}`);
    console.log(`Weight: ${typeof weight}, ${weight}`);

    if(height <= 0 || isNaN(height)){
        resultElement.innerHTML = "Please Enter Valid Height";
        resultElement.style.border = "1px solid red";
        result.classList.remove('my-3', 'p-2', 'border', 'border-success');
        resultElement.classList.add('my-3', 'p-2');
        height_weight_flag = false;
    }
    if(weight <= 0 || isNaN(weight)){
        resultElement.innerHTML = "Please Enter Valid Weight";
        resultElement.style.border = "1px solid red";
        result.classList.remove('my-3', 'p-2', 'border', 'border-success');
        resultElement.classList.add('my-3', 'p-2');
        height_weight_flag = false;
    }
    else if(height_weight_flag){
        let bmi = (weight / ((height/100) ** 2)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = bmi + ` <span id="bmiMessage">Underweight</span>`;
            document.querySelector('#bmiMessage').classList.add('text-warning');
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = bmi + ` <span id="bmiMessage">Normal Height/Weight</span>`;
            document.querySelector('#bmiMessage').classList.add('text-success');
        }
        else{
            result.innerHTML = bmi + ` <span id="bmiMessage">Overweight</span>`;
            document.querySelector('#bmiMessage').classList.add('text-danger');
        }
        result.style.fontWeight = "600";
        result.classList.add('my-3', 'p-2', 'border', 'border-success');
        
        console.log(bmi);
    }

});
```

### 3. Project - Digital-Clock : Solution
##### HTML
```
<body class="dark-mode">

    <div class="main-container">
        <div class="container clock-container my-2 py-2">
            <div class="menu-bar d-flex flex-row justify-content-around mb-5">
                <div class="menu active" id="time-bar">Time</div>
                <div class="menu" id="stopwatch-bar">Stopwatch</div>
                <div class="menu" id="timer-bar">Timer</div>
            </div>
            <div class="time-space d-flex justify-content-center align-items-center" id="time-box">
                <div id="time">12:00:00 PM</div>
            </div>
            <div class="time-space d-flex flex-column justify-content-center align-items-center d-none" id="stopwatch-box">
                <div id="stopwatch">00:00:00</div>
                <div class="stopwatch-btn">
                    <button type="button" id="stopwatchStartBtn" class="btn btn-primary mt-5">Start</button>
                    <button type="button" id="stopwatchStopBtn" class="btn btn-danger mt-5 d-none">Stop</button>
                    <button type="button" id="stopwatchResetBtn" class="btn btn-light mt-5">Reset</button>
                </div>
            </div>
            <div class="timer time-space border border-success d-flex justify-content-center align-items-center d-none" id="timer-box">
                Timer
            </div>
        </div>
    </div>
</body>
</html>
```

##### Javascript
```
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


let timeIntervalID = setInterval(() => {
    let currTime = new Date();
    let hh = (currTime.getHours() % 12).toString().padStart(2, "0");
    let mm = currTime.getMinutes().toString().padStart(2, "0");
    let ss = currTime.getSeconds().toString().padStart(2, "0");

    let ampm = currTime.toLocaleTimeString('en-IN').split(' ')[1];

    showTime.innerHTML = `${hh}:${mm}:${ss} ${ampm}`;
    console.log(`Time: ${currTime.toLocaleTimeString()}`);
}, 1000);

timeBar.addEventListener("click", (e) => {
    stopwatchBar.classList.remove('active');
    stopwatchBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    timeBox.classList.remove('d-none');
    timeBar.classList.add('active');

    let hh, mm, ss, ampm;   //  Better if define inside setInterval(), bcs garbage collected after every second.

    timeIntervalID = setInterval(() => {
        let currTime = new Date();
        hh = (currTime.getHours() % 12).toString().padStart(2, "0");
        mm = currTime.getMinutes().toString().padStart(2, "0");
        ss = currTime.getSeconds().toString().padStart(2, "0");

        ampm = currTime.toLocaleTimeString('en-IN').split(' ')[1];

        showTime.innerHTML = `${hh}:${mm}:${ss} ${ampm}`;
        console.log(`Time: ${currTime.toLocaleTimeString()}`);
    }, 1000);
});


let stopwatchIntervalID = null;

stopwatchBar.addEventListener("click", (e) => {
    clearInterval(timeIntervalID);
    timeIntervalID = null;
    
    timeBar.classList.remove('active');
    timeBox.classList.add('d-none');

    timerBar.classList.remove('active');
    timerBox.classList.add('d-none');

    stopwatchBox.classList.remove('d-none');
    stopwatchBar.classList.add('active');
});

stopwatchStartBtn.addEventListener("click", (e) => {
    let startTimeStamp = Date.now();
    let time = stopwatch.textContent.split(':');

    stopwatchStartBtn.classList.add('d-none');
    stopwatchStopBtn.classList.remove('d-none');

    stopwatchIntervalID = setInterval(() => {
        let tillNowTimeStamp = Date.now(); 
        let displayTime = Math.floor((tillNowTimeStamp - startTimeStamp) / 1000);
        console.log(`Stopwatch: ${displayTime}`);

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

stopwatchStopBtn.addEventListener("click", (e) => {
    clearInterval(stopwatchIntervalID);
    stopwatchIntervalID = null;

    stopwatchStartBtn.classList.remove('d-none');
    stopwatchStopBtn.classList.add('d-none');    
});

stopwatchResetBtn.addEventListener("click", (e) => {
    clearInterval(stopwatchIntervalID);
    stopwatchIntervalID = null;
    stopwatch.innerHTML = "00:00:00";

    stopwatchStartBtn.classList.remove('d-none');
    stopwatchStopBtn.classList.add('d-none');
});
```