$(document).ready(function() {
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);

    function validateInputs() {
        const leftVal = $('#leftInput').val();
        const rightVal = $('#rightInput').val();
        
        if (leftVal === '' || rightVal === '' || 
            parseInt(leftVal) < 0 || parseInt(rightVal) < 0) {
            return false;
        }
        return true;
    }

    function calculateResult(num1, num2, operator) {
        switch(operator) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
            case '%': return num1 % num2;
            default: return NaN;
        }
    }

    $('#calculateBtn').click(function() {
        if (!validateInputs()) {
            alert('Error :(');
            console.log('Error: Invalid input');
            return;
        }

        const num1 = parseInt($('#leftInput').val());
        const num2 = parseInt($('#rightInput').val());
        const operator = $('#operator').val();

        if ((operator === '/' || operator === '%') && num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000! (Division by zero)");
            return;
        }

        const result = calculateResult(num1, num2, operator);
        
        alert(`ผลลัพธ์: ${result}`);
        console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);
    });
});