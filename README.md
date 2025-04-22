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
