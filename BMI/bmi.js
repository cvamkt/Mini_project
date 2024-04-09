const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const results =  document.querySelector('.results');
   const weightGuide = document.querySelector('.weight_guide');

    if(height=== '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height $(height)`;
    } else if (weight=== '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight $(weight)`;}
      else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2);
       results.innerHTML = `<span>${bmi}</span>`; 
    


    // Compare BMI with thresholds
        const bmiFloat = parseFloat(bmi);
        if (bmiFloat < 18.6) {
            weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Underweight: less than 18.6</p>`;
        } else if (bmiFloat >= 18.6 && bmiFloat <= 24.9) {
            weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Normal weight: 18.6 to 24.9</p>`;
        } else {
            weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Overweight: Greater than 24.9</p>`;
        }
    
    }

});