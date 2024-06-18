//Create a function to sort an array
function bubbleSort(arr) {
    //Initialise a variable n to represent the array length
    const n = arr.length;

    //This for loop iterates over each item in the array except for the last one
    for (let i = 0; i < n - 1; i++) {
        //Initialise a variable to check whether the elements have been swapped
        let swapped = false;

        //This for loop compares two elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swap the elements if the condition is met
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //Swapped variable set to true
                swapped = true;
            }
        }

       //If no two elements were swapped by the inner loop then break
        if (!swapped) {
            break;
        }
    }
//Return the sorted array
    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array before sorting: ", array);

let sortedArray = bubbleSort(array.slice()); // Use slice() to create a copy of the array
console.log("Sorted array: ", sortedArray);
