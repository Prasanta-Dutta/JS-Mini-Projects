const progressValue = document.getElementById('progress-value');
const progressBar = document.getElementById('progress-bar');
const progressBarInner = document.getElementById('progress-bar-inner');

progressValue.addEventListener("keypress", (e) => {
    // e.preventDefault();
    if(e.keyCode === 13){
        const progressPercentage = parseFloat(progressValue.value.trim());
        console.log(progressPercentage, typeof progressPercentage);

        if(progressPercentage === null || progressPercentage === '' || isNaN(progressPercentage)){
            progressValue.placeholder = "Enter valid Value";
            progressValue.value = "";
        }
        else if(progressPercentage >= 0 && progressPercentage <= 100){
            let width = progressBar.offsetWidth;
            
            console.log(width, typeof width);
            width = width*progressPercentage/100;
            console.log(width, typeof width);
            progressBarInner.style.width = `${width}px`;
            progressBarInner.innerHTML = `${progressPercentage}%`;
        }
        else{
            progressValue.placeholder = "Percentage b/w 0-100";
            progressValue.value = "";
        }
    }
});