const keypad = document.querySelector('.keypad');
const resultDiv = document.querySelector('.result');

let temp = '';
let expression = '';

keypad.addEventListener('click', (e) => {
    let num = e.target.textContent;
    if (isNaN(Number(num))) {
        let operator = num;
        expression = `${temp} ${operator} `;
        return;
    }
    temp += num;
    console.log(temp);
    resultDiv.textContent = temp;
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

