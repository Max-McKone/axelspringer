const originalArray = [64,34, 25, 12, 22, 11, 90];
const originalArrayDisplay = document.getElementById('originalArray');
const sortedArrayDisplay = document.getElementById('sortedArray');

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    }
    while (swapped);
    return array;
}

function sort() {
    const sortedArray = bubbleSort(originalArray.slice());
    sortedArrayDisplay.textContent = sortedArray.join(', ');
}

originalArrayDisplay.textContent = originalArray.join(', ');
sort();