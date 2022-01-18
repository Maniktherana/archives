const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')
const display = calculator.querySelector('.current-calculation')
const displayFull = calculator.querySelector('.old-calculation')

let firstNumber = ''
let secondNumber = ''
let operation = ''

function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = displayFull.textContent
        const displayedNumLower = display.textContent

        if (action === 'number') {
            console.log('number')
            console.log( displayedNumLower)

                if (displayedNum === '0') {
                    displayFull.textContent = keyContent
                    display.textContent = keyContent

                } else if (displayedNumLower === '+' ||
                            displayedNumLower === '-' ||
                            displayedNumLower === '%' ||
                            displayedNumLower === '÷' ||
                            displayedNumLower === '×') {
                    display.textContent = keyContent

                } else if (displayedNum.includes('+') ||
                            displayedNum.includes('-') ||
                            displayedNum.includes('%') ||
                            displayedNum.includes('÷') ||
                            displayedNum.includes('×')) {
                    displayFull.textContent = displayedNum + keyContent
                    display.textContent = displayedNumLower + keyContent
                    secondNumber = displayedNumLower + keyContent
                } else {
                    displayFull.textContent = displayedNum + keyContent
                    display.textContent = displayedNumLower + keyContent
                }
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
            firstNumber = ''
            secondNumber = ''
        }

        if (action === 'equals') {
            secondNumber = display.textContent
            let x = operate(parseFloat(firstNumber), parseFloat(secondNumber), operation)
            console.log(parseFloat(secondNumber), secondNumber)
            firstNumber = x
            displayFull.textContent = firstNumber
            display.textContent = firstNumber
        }

        if (action === 'add') {
            displayFull.textContent = displayedNum + keyContent
            firstNumber = display.textContent
            display.textContent = "+"
            operation = 'add'
            console.log(firstNumber)
        }
        if (action === 'subtract') {
            displayFull.textContent = displayedNum + keyContent
            firstNumber = display.textContent
            display.textContent = "-"
            operation = 'subtract'
            console.log(firstNumber)
        }
        if (action === 'multiply') {
            displayFull.textContent = displayedNum + keyContent
            firstNumber = display.textContent
            display.textContent = "x"
            operation = 'multiply'
            console.log(firstNumber)
        }
        if (action === 'divide') {
            displayFull.textContent = displayedNum + keyContent
            firstNumber = display.textContent
            display.textContent = "÷"
            operation = 'divide'
            console.log(firstNumber)
        }
        if (action === 'modulus') {
            displayFull.textContent = displayedNum + keyContent
            firstNumber = display.textContent
            display.textContent = "%"
            operation = 'modulus'
            console.log(firstNumber)
        }
    }
}

function operate(num1, num2, operation) {
    
    let result = 0
    
    if (!num1) {
        num1 = 0
    } 
    if (!num2) {
        num2 = 0
    }
    
    if (operation === "add") {
        result = num1 + num2
    } else if (operation === "subtract") {
        result = num1 - num2
    } else if (operation === "multiply") {
        result = num1 * num2
    } else if (operation === "divide") {
        result = num1 / num2
    } else if (operation === "modulus") {
        result = num1 % num2
    }
    
    console.log(num1, operation, num2, result)
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