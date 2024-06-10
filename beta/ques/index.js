// 3: Queues
// Objective: Implement a basic queue using an array.
//   Hint: You can use the built-in functions push and shift.
//     Instructions:
// 1. Create an empty array to represent the queue.

// 2. Implement functions to enqueue(add) elements to the end of the queue 
let queue = [];

function enqueue(element) {
  queue.push(element);
}

// 3. Enqueue the elements 'a', 'b', and 'c' to the queue.
enqueue('a');
enqueue('b');
enqueue('c');


// dequeue(remove) elements from the front of the queue.
function dequeue() {
  if (queue.length > 0) {
    return queue.shift();
  } else {
    console.log("Queue is empty");
  }
}


// 4. Dequeue an element from the queue and print it.
let dequeuedElement = dequeue();
console.log(dequeuedElement);