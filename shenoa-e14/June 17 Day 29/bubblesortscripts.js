let numbers = [5, 1, 4, 2, 8];

function displayArray(arr, containerId) {
    const arrayContainer = document.getElementById(containerId);
    arrayContainer.innerHTML = ''; // Clear the container
    arr.forEach(num => {
        const element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = num;
        arrayContainer.appendChild(element);
    });
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Function to display the array in the HTML
    function displayArrayStep(arr) {
        return new Promise((resolve) => {
            setTimeout(() => {
                displayArray(arr, 'sorted-array-container');
                resolve();
            }, 500);
        });
    }

    async function sort() {
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap the elements
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;

                    // Log to the console
                    console.log(`Swapped: ${arr[i]} and ${arr[i + 1]}`);
                    
                    // Display the array after each swap
                    await displayArrayStep(arr);
                }
            }
            n--; // Reduce the range of the array for the next pass
        } while (swapped);

        console.log("Sorted array:", arr);
    }

    sort();
}

// Initial display of the unsorted array
displayArray(numbers, 'unsorted-array-container');

// Add event listener to the button to start the sort
document.getElementById('sort-button').addEventListener('click', () => {
    bubbleSort([...numbers]); // Pass a copy of the array to keep the original unsorted array
});
