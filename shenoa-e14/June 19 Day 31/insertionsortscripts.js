const originalArray = [3,5,1,4,9]
const originalArrayDisplay = document.getElementById("original-array");
const sortedArrayDisplay = document.getElementById("sorted-array");
const iterationsDisplay = document.getElementById("iterations");

originalArrayDisplay.textContent = originalArray.join(", ");

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        console.log(`OUTER LOOP ITERATION ${i}: Initial key element: ${array[i]} at index ${i}` ); // first element that's chosen as key element
        console.log(`Current array: ${array.join(", ")}`);

        let key = array[i];
        let j = i - 1;
        console.log(`Inner j: ${j} index array[${j}]: ${array[j]}`);

        while (j >= 0 && array[j] > key) {
            console.log(`array[j]: ${array[j]} > key: ${key}`);
            console.log(`Switching element j: ${j+1} index array[${j+1}]: ${array[j+1]}`);
            console.log(`With element j: ${j} index array[${j}]: ${array[j]}`);
            array[j+1] = array[j];
            console.log(`Array after switching: ${array.join(", ")}`);
            j--;
        }
        
        console.log(`Switching the key element: array[${j+1}]: ${array[j+1]} with ${key}`);
        array[j+1] = key;

        console.log(`Array after the iteration: ${array.join(", ")}`); // optional, comment out if too verbose
    }

    return array;
}


function sort() {
    const sortedArray = insertionSort(originalArray.slice());
    sortedArrayDisplay.textContent = sortedArray.join(", ");
}