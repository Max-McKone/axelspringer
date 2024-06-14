//Create empty stack
const stack = [];

//Push function
function pushToStack(value) {
    stack.push(value);
    displayStack();
}

//Pop function
function popFromStack() {
    stack.pop();
    displayStack();
}

//Get input field
const inputField = document.getElementById('stackInput');

//Push input field value to stack
function pushElement() {
    const value = inputField.value;
    if (value !== '') {
        pushToStack(value);
        inputField.value = '';
    }
}

//Pop element from stack
function popElement() {
    popFromStack();
}

//Get stack list element
const stackList = document.getElementById('stackList');

//Display stack
function displayStack() {
    stackList.innerHTML = '';
    for (let i = stack.length - 1; i >= 0; i--) {
        const listItem = document.createElement('li');
        listItem.textContent = stack[i];
        stackList.appendChild(listItem);
    }
}

//Display empty stack on page load
displayStack();

