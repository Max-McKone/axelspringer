const buttonElement = document.getElementById("calculateSumButton");
const num1Element = document.getElementById("num1Input");
const num2Element = document.getElementById("num2Input");
const resultBox = document.getElementById('resultBox');

buttonElement.addEventListener('click', function () {
  if (!isNaN(num1Element.value) && !isNaN(num2Element.value)) {
  const sum = Number(num1Element.value) + Number(num2Element.value);
  resultBox.innerHTML = `The sum of ${(num1Element.value).toLocaleString()} and ${(num2Element.value).toLocaleString()} is ${(sum).toLocaleString()}.`;
  }
  else {
    resultBox.innerHTML = `ERROR!<br>The sum of "${(num1Element.value)}" and "${(num2Element.value)}" cannot be calculated as they are not numbers.<br>Try again with 2 numbers!`;
  }
  })