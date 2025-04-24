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