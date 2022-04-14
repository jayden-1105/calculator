
const btnAdd = document.querySelector('.addition');
const btnSubtract = document.querySelector('.subtract');
const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');
const btnEqual = document.querySelector('.equal');
const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnSeven = document.querySelector('.seven');
const btnEight = document.querySelector('.eight');
const btnNine = document.querySelector('.nine');
const btnDecimal = document.querySelector('.decimal');
const btnZero = document.querySelector('.zero');
const btnClr = document.querySelector('.clear');
const answerText = document.querySelector('.answer');

btnAdd.onclick = (e) => createNumber(e);
btnSubtract.onclick = (e) => createNumber(e);
btnDivide.onclick = (e) => createNumber(e);
btnMultiply.onclick = (e) => createNumber(e);
btnEqual.onclick = (e) => createNumberString(e);
btnOne.onclick = (e) => createNumberString(e);
btnTwo.onclick = (e) => createNumberString(e);
btnThree.onclick = (e) => createNumberString(e);
btnFour.onclick = (e) => createNumberString(e);
btnFive.onclick = (e) => createNumberString(e);
btnSix.onclick = (e) => createNumberString(e);
btnSeven.onclick = (e) => createNumberString(e);
btnEight.onclick = (e) => createNumberString(e);
btnNine.onclick = (e) => createNumberString(e);
btnDecimal.onclick = (e) => createNumberString(e);
btnZero.onclick = (e) => createNumberString(e);
btnClr.onclick = (e) => console.log('clr');


let currentNumber = "";
let firstNumber = "";
let secondNumber = "";
let answer = "";
let currentOperation = "";


// Takes input from buttons pressed and concats a string together to make a numbe.
function createNumberString(e) {
    currentNumber = currentNumber.concat(e.target.value);
    console.log(currentNumber);

}

// Takes the string created in createNumberString and converts it to a number.
// Assigns the new number to either first or second number depending on if firstNumber is blank or not.
// Resets currentNumber to blank so createNumberScreen can continue collecting a second number.
function createNumber(e) {
    if(firstNumber === "") {
        firstNumber = parseInt(currentNumber);
        console.log(`first number ${firstNumber}`);
    }
    else {
        secondNumber = parseInt(currentNumber);
        console.log(`second number ${secondNumber}`);   
    }
    currentNumber = "";
}

// function getOperation(e) {
//     let operator = e.target.value
//     console.log(operator);
//     if(operator="+") {
//         return add();
//     }
//     else if(operator="-") {
//         return subtract();
//     }
//     else if(operator="*") {
//         return multiply();
//     }
//     else { 
//         return divide();
//     }
// }
function operate(num1, num2, operation) {
    return operation(num1, num2);
}



// Operator Functions

function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}



function updateAnswer(answer) {
    answerText.innerHTML = answer;
}
