// Task 2: Stacks
// Objective: Implement a basic stack using an array.
//   Hint: Use the built-in functions push and pop
// Instructions:
// 1. Create an empty array to represent the stack.
let stack = [];
// 2. Implement function to push elements onto the stack and pop elements from the
// stack.
function push(element) {
  stack.push(element);
}
// Push the elements 10, 20, and 30 onto the stack.
push(10);
push(20);
push(30);


// Implement function to pop elements from the stack


function pop() {
  if (stack.length > 0) {
    return stack.pop();
  } else {
    throw new Error("Stack is empty");
  }
}


// 4. Pop an element from the stack and print it.

let poppedElement = pop();
console.log(poppedElement); 

