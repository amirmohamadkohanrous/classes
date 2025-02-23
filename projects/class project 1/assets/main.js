const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const buttons = document.querySelectorAll('button');
const calculator = {
    displayValue: '0',
    firstOperand: null,
    haveSecondOperand: false,
    operator: null,
}

const existingTheme = localStorage.getItem('calculator-theme') ? localStorage.getItem('calculator-theme') : 'theme1';
const themetoggles = document.querySelectorAll('label');
const decimalpercision = 10;

function toggletheme(switchtheme) {
    document.documentElement.setAttribute('data-theme', switchtheme);

    themetoggles.forEach(theme => theme.classList.remove('toggle-on'));

    switchtheme === 'theme1' ? themetoggles[0].classList.add('toggle-on') : switchtheme === 'theme2' ? themetoggles[1].classList.add('toggle-on') : themetoggles[2].classList.add('toggle-on');

    localStorage.setItem('calculator-theme', switchtheme);
}

if (existingTheme) {
    toggletheme(existingTheme);
}

theme1.addEventListener('click', () => toggletheme('theme1')); 

theme2.addEventListener('click', () => toggletheme('theme2'));

theme3.addEventListener('click', () => toggletheme('theme3'));

const date = new Date()

if (date.getHours() >= 18) {
    toggletheme('theme3');
}

else {
    toggletheme('theme1');
}

function updateDispaly() {
    const display = document.getElementById('display')
    display.textContent = Number(calculator.displayValue) <= 99999999999 ? Number(calculator.displayValue).toLocaleString('en-US', {maximumFractionDigits: decimalPercision}) : Number(calculator.displayValue).toExponential(4);
}

function handleInput(input) {
    switch (input) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
            handleOperator(input)
            break
        case 'DEL':
            calculator.displayValue = calculator.displayValue.slice(0, -1)
            break
        case 'delete':
            calculator.displayValue = calculator.displayValue.slice(0, -1)
            break
        case 'backspace':
            calculator.displayValue = calculator.displayValue.slice(0, -1)
            break
        case '.':
            inputDecimal(input)
            break
        case 'RESET':
            // resetCalculator()
            break
        default:
            if (Number.isInteger(parseFloat(input))) {
                inputDigit(input)
            }
    }
    updateDispaly();
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        const {
            textContent
        } = e.target
        document.documentElement.focus()
        handleInput(textContent)
    })
})

document.body.addEventListener('keyup', e => {
    let {
        key
    } = e
    key = key.toLowerCase()
    key === 'enter' ? key = '=' : null
    key === '*' ? key = 'x' : null
    handleInput(key)
})

function resetCalculator() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.haveSecondOperand= false;
    calculator.operator = null;
}

function calculate(firstOperand, SecondOperand, operator) {
    if (operator === '+') {
        return firstOperand + SecondOperand;
    }
    else if (operator === '-') {
        return firstOperand - SecondOperand;
    }
    else if (operator === 'x') {
        return firstOperand * SecondOperand;
    }
    else if (operator === '/') {
        return firstOperand / SecondOperand;
    }
    return SecondOperand;
}

function inputDigit(digit) {
    const {
        displayValue,
        haveSecondOperand
    } = calculator;

    if (haveSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.haveSecondOperand = false;
    }

    else {
        if (calculator.displayValue.length <= 10) {
            calculator.displayValue = displayValue === '0' ? digit : displayValue = digit;
        
        }
    }
}