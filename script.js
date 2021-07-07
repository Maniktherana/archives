const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')
const display = calculator.querySelector('.current-calculation')
const displayFull = calculator.querySelector('.old-calculation')

function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = displayFull.textContent

        if (displayedNum === '0') {
            displayFull.textContent = keyContent
        } else {
            displayFull.textContent = displayedNum + keyContent
        }
        if (action === 'decimal') {
            if(displayedNum.includes('.')) {
                displayFull.textContent = displayedNum
            } else {
                displayFull.textContent = displayedNum + keyContent
            }
        }
        if (action === 'delete') {
            if (displayedNum !== '0' && displayedNum.length !== 1) {
                displayFull.textContent = displayedNum.substring(0, displayedNum.length - 1);
            } else {
                displayFull.textContent = '0'
            }
        }
        if (action === 'clear') {
            displayFull.textContent = '0'
        }

        if (action === 'add') {
            display.textContent = "+"
        }
        if (action === 'subtract') {
            display.textContent = "-"
        }
        if (action === 'multiply') {
            display.textContent = "x"
        }
        if (action === 'divide') {
            display.textContent = "÷"
        }
        if (action === 'modulus') {
            display.textContent = "%"
        }
    }
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