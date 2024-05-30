/* <button id="generateNumber">Generate Random Number</button>
<div id="resultBox"></div> */

const buttonElement = document.getElementById("generateNumberButton");

buttonElement.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 9999);
  resultBox.innerHTML = `Your number has been generated and it is: ${randomNum}.<br>If you don't like it, press again!`;
  })