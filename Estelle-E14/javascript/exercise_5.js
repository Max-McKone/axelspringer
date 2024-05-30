/* <input placeholder="Please enter your paragraph!" id="paragraphInput">
  <button id="checkCountsButton">Get Counts</button>
  <div id="resultBox"></div> */

const buttonElement = document.getElementById("checkCountsButton");
const paragraphInput = document.getElementById("paragraphInput")
const resultBox = document.getElementById('resultBox');

buttonElement.addEventListener('click', function () {
  let paragraph = paragraphInput.value;
  let count = 0;
  let check = false;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] !== " " && !check) {
      count++;
      check = true;
    }
    else if (paragraph[i] === " ") {
      check = false;
    }
  }
  resultBox.innerHTML = `Your paragraph contains ${count} words.`;
  })