// Update your HTML document to include a button labeled "Generate
// Random Number" and a paragraph element where the random number will
// be displayed.
// ● Write a JavaScript function that generates a random number using the
// Math.random() method and displays it in the designated paragraph.
// ● Add an event listener to the button element so that when it is clicked, the
// JavaScript function is executed.
// ● Test the functionality by clicking the button to generate a random number
// and verify that it changes with each click.


function generateRandom() {
  let randomValue = Math.floor(Math.random() * 10000);
  displayMessage(`Our random number is: ${randomValue}`);
}


function displayMessage(message) {
  document.getElementById("dynamicTxt").innerHTML = message;
}