const numbers = [ 2, 3, 7, 11, 13, 17, 19, 23];


//Create a function that will search for a number in the array using binary search
function binarySearch(numbers, target) {
    //Initialize left and right pointers. Left is the first index of the array and right is the last index of the array 
  let left = 0;
  let right = numbers.length - 1;

  //The loop runs as long as the left pointer is less than or equal to the right pointer
    while (left <= right) {
        //Find the middle index of the array
        const middle = Math.floor((left + right) / 2);
        //Initialize the middle number of the array
        const middleNumber = numbers[middle];

        //Check if the middle number is equal to the target number
        if (middleNumber === target) {
            return middle;

            //Check if the middle number is less than the target number
        } else if (middleNumber < target) {
            left = middle + 1;
            //Check if the middle number is greater than the target number
        } else {
            right = middle - 1;
        }
    }
    
//If the target number is not found in the array, return -1
    return -1;
}

function search() {
  const searchNumber = parseInt(document.getElementById('searchInput').value);
  const resultDisplay = document.getElementById('result');
    const index = binarySearch(numbers, searchNumber);

    if (index !== -1) {
        resultDisplay.textContent = `Number ${searchNumber} found at index ${index}`;
    } else {
        resultDisplay.textContent = `Number ${searchNumber} not found`;
    }       
}