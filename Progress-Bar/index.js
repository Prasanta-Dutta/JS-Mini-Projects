const progressValue = document.getElementById('progress-value');
const progressBar = document.getElementById('progress-bar');

// console.log(progressValue)

progressValue.addEventListener("keypress", (e) => {
    // e.preventDefault();
    if(e.keyCode === 13){
        const progressPercentage = parseFloat(progressValue.value.trim());
        console.log(progressPercentage, typeof progressPercentage);

        if(progressPercentage === null || progressPercentage === '' || isNaN(progressPercentage)){
            progressValue.innerHTML = "Enter valid Value";
            console.log("hi")
        }
    }
});