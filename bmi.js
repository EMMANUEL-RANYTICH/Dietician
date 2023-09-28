document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    javascript
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    calculateBMI(); // Call the calculateBMI function
});

    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter a valid height and weight!');
        return;
    }

    const bmi = weight / Math.pow(height, 2);
    const result = document.getElementById('result');
    const suggestions = document.getElementById('suggestions');

    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        suggestions.textContent = 'You are underweight. You should see a doctor for advice.';
    } else if (bmi >= 18.5 && bmi < 25) {
        suggestions.textContent = 'You have a normal weight. Keep it up!';
    } else if (bmi >= 25 && bmi < 30) {
        suggestions.textContent = 'You are overweight. You should consider a healthy diet and regular exercise.';
    } else {
        suggestions.textContent = 'You are obese. You should consult a doctor immediately for advice on a healthy lifestyle.';
    }
});