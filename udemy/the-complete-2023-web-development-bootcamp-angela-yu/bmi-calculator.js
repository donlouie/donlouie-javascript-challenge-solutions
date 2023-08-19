// BMI Calculator

function bmiCalculator(w, h){
    var bmi = w / Math.pow(h, 2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

///////////////////////////////////////////////////////////////////////////
// IF ELSE
function bmiCalculator (weight, height) {
    bmi = weight / Math.pow(height, 2);
    var interpretation;
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
     if (bmi >= 18.5  &&  bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
     if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation
}
bmiCalculator(80, 2); 