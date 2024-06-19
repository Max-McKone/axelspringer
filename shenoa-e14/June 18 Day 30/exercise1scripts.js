// The bubble sort algorithm has two loops, one that iterates over the array 
//and one that compares the elements to see which is bigger and 
//swaps them if necessary.



const arr = [5,3,8,4,2]

function bubbleSortAscending(arr){
    let swapped;
    let n = arr.length;

    do {
        swapped = false;

        for (let i = 0; i < n ; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        }
       //Checks if swapped is true and as long as something has been swapped, continue
        while (swapped);
        return arr;
    }
   
    console.log(bubbleSortAscending(arr));