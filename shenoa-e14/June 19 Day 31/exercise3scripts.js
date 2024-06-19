const arr = [15, 19, 8, 5, 3];

function selectionSortDescending(arr) {
    let n = arr.length;
    let iterations = 0; // Count the number of swaps
    let comparisons = 0;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            comparisons++
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
            iterations++;
        }
    }

    // Return an object with the sorted array and the number of swaps
    return { sortedArray: arr, swaps: iterations, comparisons: comparisons };
}


const result = selectionSortDescending(arr);
console.log(`Sorted Array: ${result.sortedArray}`); // Output the sorted array
console.log(`Number of Swaps: ${result.swaps}`); // Output the number of swaps
console.log(`Number of Comparisons: ${result.comparisons}`);
