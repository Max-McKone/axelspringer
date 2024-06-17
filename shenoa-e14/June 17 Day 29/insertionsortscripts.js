let numbers = [5, 1, 4, 2, 8];

function displayArray(arr) {
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = ''; // Clear the container
    arr.forEach(num => {
        const element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = num;
        arrayContainer.appendChild(element);
    });
}

function insertionSort(arr) {
    let n = arr.length;

    // Function to display the array in the HTML
    function displayArrayStep(arr) {
        return new Promise((resolve) => {
            setTimeout(() => {
                displayArray(arr);
                resolve();
            }, 500);
        });
    }

    async function sort() {
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;

            // Move elements of arr[0..i-1], that are greater than key,
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;

                // Display the array after each shift
                await displayArrayStep(arr);
            }
            arr[j + 1] = key;

            // Display the array after inserting the key
            await displayArrayStep(arr);
        }

        console.log("Sorted array:", arr);
    }

    sort();
}

// Initial display of the unsorted array
displayArray(numbers);

// Add event listener to the button to start the sort
document.getElementById('sort-button').addEventListener('click', () => {
    insertionSort(numbers);
});
