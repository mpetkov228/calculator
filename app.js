const keypad = document.querySelector('.keypad');
const calculationDiv = document.querySelector('.calculation');
const resultDiv = document.querySelector('.result');

keypad.addEventListener('click', (e) => {
    let input = e.target.textContent;
    if (isNaN(Number(input))) {
        calculationDiv.textContent += ' ' + input + ' ';
        return;
    }

    calculationDiv.textContent += input;
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

