const originalArray = [64, 34, 25, 12, 22, 11, 90, 20, 5, 47, 2, 17]
const originalArrayDisplay = document.getElementById("original-array");
const sortedArrayDisplay = document.getElementById("sorted-array");
const iterationsDisplay = document.getElementById("iterations");

// first method
function bubbleSort(array) {
    let swapped;
    let iterations = 0;
    do {
        swapped = false;
        for (let i = 0; i < array.length -1; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapped = true;
            }
        }
        iterations++;
    } while (swapped);

    iterationsDisplay.textContent = iterations;
    return array;
}

// second method
function bubbleSortMethod2(inputArray) {
    let array = inputArray.slice();
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                //swap elements
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapped = true;
            }
        }
        
        if (!swapped) {
            // if no swaps are made in this pass, the array is already sorted
            return array;
        }
    }
}

function sort() {
    const sortedArray = bubbleSort(originalArray.slice()); // Method 1
    // const sortedArray = bubbleSortMethod2(originalArray.slice()); // Method 2
    sortedArrayDisplay.textContent = sortedArray.join(", ");
}

originalArrayDisplay.textContent = originalArray.join(", ");
sortedArrayDisplay.textContent = originalArray.join(", ");