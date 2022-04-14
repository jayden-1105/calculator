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
const answer = document.querySelector('.answer');

btnAdd.onclick = () => console.log('Add');
btnSubtract.onclick = () => console.log('Subtract');
btnDivide.onclick = () => console.log('Divide');
btnMultiply.onclick = () => console.log('Multiply');
btnEqual.onclick = () => console.log('Equal');
btnOne.onclick = () => console.log('1');
btnTwo.onclick = () => console.log('2');
btnThree.onclick = () => console.log('3');
btnFour.onclick = () => console.log('4');
btnFive.onclick = () => console.log('5');
btnSix.onclick = () => console.log('6');
btnSeven.onclick = () => console.log('7');
btnEight.onclick = () => console.log('8');
btnNine.onclick = () => console.log('9');
btnDecimal.onclick = () => console.log('.');
btnZero.onclick = () => console.log('0');
btnClr.onclick = () => console.log('clr');

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

function operate(num1, num2, operation) {
    operation(num1, num2);
}

function updateAnswer(answer) {
    answer.innerHTML = answer;
}
