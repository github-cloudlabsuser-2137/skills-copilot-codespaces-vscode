class Calculator {
    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = null;
        this.previousOperand = '';
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    updateDisplay() {
        console.log(this.currentOperand);
    }
}

// Command-line interface
const calculator = new Calculator();
const prompt = require('prompt-sync')();

while (true) {
    console.log("Current display: " + calculator.currentOperand);
    const input = prompt('Enter a number, operation (+, -, *, /), or command (c for clear, = for compute, q for quit): ');

    if (input === 'q') break;
    if (input === 'c') {
        calculator.clear();
    } else if (input === '=') {
        calculator.compute();
        calculator.updateDisplay();
    } else if (['+', '-', '*', '/'].includes(input)) {
        calculator.chooseOperation(input);
    } else {
        calculator.appendNumber(input);
    }
}