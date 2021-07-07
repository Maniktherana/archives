const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')
const display = calculator.querySelector('.current-calculation')
const displayFull = calculator.querySelector('.old-calculation')

let firstNumber = 0
let secondNumber = 0
let operation = ''

function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = displayFull.textContent
        const displayedNumLower = display.textContent

        if (displayedNum === '0') {
            displayFull.textContent = keyContent
            display.textContent = keyContent
        } else {
            displayFull.textContent = displayedNum + keyContent
            display.textContent = displayedNumLower + keyContent
        }
        if (action === 'decimal') {
            if(displayedNumLower.includes('.')) {
                displayFull.textContent = displayedNum
                display.textContent = displayedNumLower
            } else {
                displayFull.textContent = displayedNum + keyContent
                display.textContent = displayedNumLower + keyContent
            }
        }
        if (action === 'delete') {
            if (displayedNum !== '0' && displayedNum.length !== 1) {
                displayFull.textContent = displayedNum.substring(0, displayedNum.length - 1);
                display.textContent = displayedNumLower.substring(0, displayedNumLower.length - 1);
            } else {
                displayFull.textContent = '0'
                display.textContent = '0'
            }
        }
        if (action === 'clear') {
            displayFull.textContent = '0'
            display.textContent = '0'
            firstNumber = 0
            secondNumber = 0
        }

        if (action === 'equals') {
            let x = operate(firstNumber, secondNumber, operation)
            firstNumber = x
            display.textContent = firstNumber
        }

        if (action === 'add') {
            display.textContent = "+"
            operation = 'add'
        }
        if (action === 'subtract') {
            display.textContent = "-"
            operation = 'subtract'
        }
        if (action === 'multiply') {
            display.textContent = "x"
            operation = 'multiply'
        }
        if (action === 'divide') {
            display.textContent = "÷"
            operation = 'divide'
        }
        if (action === 'modulus') {
            display.textContent = "%"
            operation = 'modulus'
        }
    }
}

function operate(num1, num2, operation) {
    let result = 0
    if (operation === "add") {
        result = num1 + num2
    } else if (operation === "subtract") {
        result = num1 - num2
    } else if (operation === "multiply") {
        result = num1 * num2
    } else if (operation === "divide") {
        if (num1 & num2 === 0) {
            result = "stop"
        } else {
            result = num1 / num2
        }
    } else if (operation === "modulus") {
        result = num1 % num2
    }
    return result
}

// logs clicks to console
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log(key.textContent)
        } if (action === 'decimal') {
            console.log('decimal key')
        } if (action === 'clear') {
            console.log('clear key')
        } if (action === 'delete') {
            console.log('delete key')
        } if (action === 'equals') {
            console.log('equals key')
        } if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'modulus'
        ) {
            console.log('operation key')
        }
    }
})

// Event listener
keys.addEventListener('click', updateDisplay)