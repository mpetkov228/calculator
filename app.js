const keypad = document.querySelector('.keypad');
const calculationDiv = document.querySelector('.calculation');
const resultDiv = document.querySelector('.result');

let previousResult = Number(resultDiv.textContent);
let currentResult = '';

keypad.addEventListener('click', (e) => {
    let input = e.target.textContent;

    if (input == '=') {
        let [num1, operator, num2] = calculationDiv.textContent.split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        let result = operate(num1, num2, operator);
        resultDiv.textContent = currentResult + result;
        calculationDiv.textContent = '';
        return;
    }

    if (isNaN(Number(input))) {
        let operator = input;
        return;
    }

    currentResult += input;
    resultDiv.textContent = currentResult;
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

