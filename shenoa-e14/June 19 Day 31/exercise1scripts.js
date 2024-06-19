//Implement the selection sort algorithm

//Define an array
const arr = [19, 35, 1, 3, 5, 7];

//Create a function that takes an array as a parameter
function selectionSortAscending(arr) {

    //Declare a variable for the array length
    let n = arr.length;

    //The first for loop iterates over all the elements in the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
    
        for (let j = i + 1; j < n; j++) {
            //Compare the element at current j with the element at minIndex
            if (arr[j] < arr[minIndex]) {
                //If the condition is true minIndex becomes j
                minIndex = j;
            }

        }
        //After the inner loop ends, check whether minIndex is equal to i and if they are different swap the elements
        if (arr[minIndex]!== arr[i]){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

}

selectionSortAscending(arr);
console.log(arr);