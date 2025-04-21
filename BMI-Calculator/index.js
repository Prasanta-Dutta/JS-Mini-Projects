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
        // result.style.border = "none";
        result.style.fontWeight = "600";
        result.classList.add('my-3', 'p-2', 'border', 'border-success');
        
        console.log(bmi);
    }

});