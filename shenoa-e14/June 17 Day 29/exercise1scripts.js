//Initialise an array of numbers
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

//Function to search for a target number in the array
function binarySearch(arr, target) {
    //Initialise low and high variables that will be used to search for the target number   
    let low = 0;
    let high = arr.length - 1;

    //The outer loop will run until the low index is less than or equal to the high index   
    while (low <= high) {
        //Calculate the middle index of the array
        const mid = Math.floor((low + high) / 2);

//If the target number is found, return the index of the target number
        if (arr[mid] === target) {
            return mid;
//If the target number is less than the middle number, set the high index to the middle index - 1
        } else if (arr[mid] < target) {
            low = mid + 1;

        } else {
            high = mid - 1;
        }
    }
    //If the target number is not found, return -1
    return -1;
}

console.log(binarySearch(array, 23)); // Output should be the index of 23, which is 5
