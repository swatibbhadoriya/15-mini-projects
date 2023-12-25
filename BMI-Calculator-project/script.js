function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;

    if (height !== '' && weight !== '') {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        displayResult(bmi);
        calculateIdealWeight(height, age);
    } else {
        alert('Please enter valid values for height and weight.');
    }
}

function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI: ' + bmi;

    if (bmi < 18.5) {
        resultElement.innerHTML += '<br>Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultElement.innerHTML += '<br>Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultElement.innerHTML += '<br>Overweight';
    } else {
        resultElement.innerHTML += '<br>Obese';
    }
}

function calculateIdealWeight(height, age) {
    var idealWeight = (height - 100 + age / 10).toFixed(2);
    var idealWeightElement = document.getElementById('idealWeight');
    idealWeightElement.innerHTML = 'Your Ideal Weight: ' + idealWeight + ' kg';
}
