// Initialise an array of numbers
const originalArray = [5, 3, 6, 2, 10];

// Get the HTML elements to display the original and sorted arrays
const originalArrayDisplay = document.getElementById("originalArray");
const sortedArrayDisplay = document.getElementById("sortedArray");
const iterationDisplay = document.getElementById("iterations");

// Display the original array
originalArrayDisplay.textContent = originalArray.join(", ");

// Function 
function selectionSort(array) {
    let iterations = 0; // Reset iterations for each sort call

    // Loop through the array
    for (let i = 0; i < array.length - 1; i++) {
        // Find the minimum element in the array
        let minIndex = i;
        console.log(`OUTER LOOP: Initial minimum element: ${array[minIndex]} at index ${minIndex}`); // First element that's chosen as min element
        console.log(`Current array: ${array.join(", ")}`);

        // Loop through the array starting from the next element
        for (let j = i + 1; j < array.length; j++) {
            console.log(`array[${j}]: ${array[j]}, array[${minIndex}]: ${array[minIndex]}`);
            // If the current element is less than the minimum element, update the minimum element
            if (array[j] < array[minIndex]) {
                console.log(`New minimum index chosen: ${j}, value: ${array[j]}`); 
                minIndex = j;
            }
        }

        // Swap the minimum element with the current element
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            iterations++;
        }
    }

    // Return the sorted array and the number of iterations
    return { sortedArray: array, iterations: iterations };
}

function sort() {
    // Get the sorted array and iterations
    const result = selectionSort([...originalArray]);

    // Display the sorted array
    sortedArrayDisplay.textContent = result.sortedArray.join(", ");

    // Display the number of iterations
    iterationDisplay.textContent = result.iterations;
}
