function sortThreeElements(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let temp = 0;

    // Ensure a is less than or equal to b
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    // Ensure b is less than or equal to c
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }

    // Ensure a is less than or equal to b after the second swap
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    // Update the array with sorted values
    arr[0] = a;
    arr[1] = b;
    arr[2] = c;
}

let array = [9, 4, 7];
console.log("Original array:", array);
sortThreeElements(array);
console.log("Sorted array:", array); // Output should be [4, 7, 9]
