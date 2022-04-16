
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


// All button event Listeners - Could create some of these with a loop but not 
// not sure if it's worth the time at thsi point. 
btnAdd.onclick = (e) => createNumber(e);
btnSubtract.onclick = (e) => createNumber(e);
btnDivide.onclick = (e) => createNumber(e);
btnMultiply.onclick = (e) => createNumber(e);
btnEqual.onclick = (e) => {
    if(firstNumber === "" || currentNumber === "") {
        return;
    };
    secondNumber = parseFloat(currentNumber);
    operate(firstNumber, secondNumber, currentOperation);
    currentNumber = "";
    currentOperation = "equal";
};
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
btnClr.onclick = (e) => clear();


// Default Variable Values
currentNumber = "";
firstNumber = "";
secondNumber = "";
answer = "";
currentOperation = "";
newAnswer = 0;


// Takes input from buttons pressed and concats a string together to make a number.
function createNumberString(e) {
    if(currentOperation === "equal") {
        clear();
    }
    currentNumber = currentNumber.concat(e.target.value);
    displayCurrentNumber(currentNumber);
}

// Takes the string created in createNumberString and converts it to a number.
// Assigns the new number to either first or second number depending on if firstNumber is blank or not.
// Resets currentNumber to blank so createNumberScreen can continue collecting a second number.
function createNumber(e) {
    displayCurrentNumber("");
    if(currentNumber === "") {
        currentOperation = e.target.value
        return;
    }
    if(firstNumber === "") {
        firstNumber = parseFloat(currentNumber);
        currentOperation = e.target.value
    }
    else {
        secondNumber = parseFloat(currentNumber);  
        operate(firstNumber, secondNumber, currentOperation);
    }
    currentOperation = e.target.value
    currentNumber = "";
}

// Operation

function operate(first, second, currentOperation) {
    if(currentOperation === "+") {
        newAnswer = add(first, second);
        displayAnswer(newAnswer)
    }
    else if(currentOperation === "-") {
        newAnswer = subtract(first, second);
        displayAnswer(newAnswer);
    }
    else if(currentOperation === "*") {
        newAnswer = multiply(first, second);
        displayAnswer(newAnswer);
    }
    else { 
        newAnswer = divide(first, second);
        displayAnswer(newAnswer);
    }
    firstNumber = newAnswer;
    secondNumber = "";
}




// currentOperation Functions

function add(num1, num2) {
    return Math.round((num1 + num2) * 10000) / 10000;
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 10000) / 10000;
}

function multiply(num1, num2) {
    return Math.round((num1 * num2) * 10000) / 10000;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 10000) / 10000;
}


// Clear Function
function clear() {
    currentNumber = "";
    firstNumber = "";
    secondNumber = "";
    answer = "";
    currentOperation = "";
    displayCurrentNumber("");
}

function displayCurrentNumber(number) {
    answerText.innerHTML = number;
}

function displayAnswer(answer) {
    answerText.innerHTML = answer;
}
