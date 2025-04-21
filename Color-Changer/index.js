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


        /*
            const bgColor = e.target.style.backgroundColor;
            console.log("Inline background color:", bgColor);

            1. .style.backgroundColor only gives you the value set inline, like:
            2. <div style="background-color: red;"></div>

            3. It won’t return values set via external or internal CSS (<style> or CSS files).
            4. For that, you'd still need getComputedStyle().
        */

    });


    // 2. OnMouseLeave:

    cb.addEventListener("mouseleave", (e) => {
        body.style.backgroundColor = "#212121";

    });


    /*
        console.log(cb);
        console.log(typeof cb);
        console.log(this);
    */
    
});