const keypad = document.querySelector('.keypad');
const resultDiv = document.querySelector('.result');

let num1 = '';
let num2 = '';
let operator;
let expression = '';

keypad.addEventListener('click', (e) => {
    let num = e.target.textContent;

    if (num == 'C') {
        return clear();
    }

    if (num == '=' && operator) {
        let result = operate(Number(num1), Number(num2), operator);
        resultDiv.textContent = result;

        num1 = result;
        num2 = '';
    }
    
    if (isNaN(Number(num))) {
        operator = num;
        return;
    }

    if (operator) {
        num2 += num;
        resultDiv.textContent = num2;
        return;
    } else {
        num1 += num;
        resultDiv.textContent = num1;
    }   
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
    if (b == 0) {
        return 'That\'s a nono!';
    }
    return a / b;
}

function operate(num1, num2, operator) {
    let result;
    num1 = Number(num1);
    num2 = Number(num2);
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

function clear() {
    resultDiv.textContent = '0';
    num1 = '';
    num2 = '';
    operator = undefined;
}

