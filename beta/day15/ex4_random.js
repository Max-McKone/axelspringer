// Update your HTML document to include a button labeled "Generate
// Random Number" and a paragraph element where the random number will
// be displayed.
// ● Write a JavaScript function that generates a random number using the
// Math.random() method and displays it in the designated paragraph.
// ● Add an event listener to the button element so that when it is clicked, the
// JavaScript function is executed.
// ● Test the functionality by clicking the button to generate a random number
// and verify that it changes with each click.
const headerTxt = document.getElementById('headerTxt');
const changeColorButton = document.getElementById('changeColorButton');

function generateRandom() {
  let randomValue = Math.floor(Math.random() * 10000);
  displayMessage(`Our random number is: ${randomValue}`);
}

function displayMessage(message) {
  document.getElementById("dynamicTxt").innerHTML = message;
}

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

// changeColorButton.addEventListener("click", () => {
//   // Change the background color
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
//   changeColorButton.textContent = 'Color Changed!'
  
// });

// Function to change the background color and button text
function changeBackgroundColor() {
  const newColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = newColor;
  changeColorButton.textContent = 'Color Changed!';
}

// Add an event listener to the button
('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);

// changeColorButton.addEventListener('click', () => {
//   // Change the text of the <h1> element
 

// });

// Choose a simple JavaScript functionality that interests you or aligns with
// your learning goals(e.g., displaying a current date / time, toggling visibility of
// an element, validating a form input).
// ● Implement the chosen functionality in your HTML document using
// JavaScript.
// ● Test the functionality to ensure it works as expected.


// function displayDateTime() {
//   const now = new Date();
//   const dateTimeString = now.toLocaleString();
//   document.getElementById('datetime').textContent = dateTimeString;
// }


// displayDateTime();

// // Update the date and time every second
// setInterval(displayDateTime, 1000);
// Select the elements



