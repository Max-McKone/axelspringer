function swap(arr) {
    //Error handling: Check if the array has exactly two elements
    if (arr.length !== 2) {
        console.error("Array must have exactly two elements.");
        return;
    }

    // Determine if the array is in ascending or descending order
    let isAscending = arr[0] < arr[1];

    // Output the order of the array
    if (isAscending) {
        console.log("Array is in ascending order. Making it descending...");
    } else {
        console.log("Array is in descending order. Making it ascending...");
    }

    // Initialise a temporary variable to store the first element
    let temp = arr[0];
    // Swap the elements
    arr[0] = arr[1];
    // Assign the temporary variable to the second element
    arr[1] = temp;

    // Output the swapped array
    console.log("Swapped array:", arr);
}

// Example usage
let ascendingArray = [2, 5];
console.log("Original array:", ascendingArray);
swap(ascendingArray); // Output should indicate the order and the swapped array

let descendingArray = [5, 2];
console.log("Original array:", descendingArray);
swap(descendingArray); // Output should indicate the order and the swapped array
