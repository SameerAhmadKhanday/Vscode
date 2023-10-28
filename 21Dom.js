// script.js
// const countDisplay = document.getElementById('count');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');
// const resetButton = document.getElementById('reset');

// let count = 0;

// Function to update the counter display
// function updateDisplay() {
//     countDisplay.textContent = count;
// }

// Event listener for the increment button
// incrementButton.addEventListener('click', () => {
//     count++;
//     updateDisplay();
// });

// Event listener for the decrement button
// decrementButton.addEventListener('click', () => {
//     count--;
//     updateDisplay();
// });

// Event listener for the reset button
// resetButton.addEventListener('click', () => {
//     count = 0;
//     updateDisplay();
// });

// Initialize the display
// updateDisplay();


// script.js

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let count = 0 ;

function updateDisplay() {
    countDisplay.textContent = count;
}

function incrementCounter() {
    count++;
    updateDisplay();
}

function decrementCounter() {
    count--;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

// Event listeners
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);

// Initialize the display
// updateDisplay();