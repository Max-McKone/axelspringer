const arr = [15, 19, 8, 5, 3];

function selectionSortDescending(arr) {
    let n = arr.length;
    

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
          
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
           
        }
    }
    
}


selectionSortDescending(arr);
console.log(arr);
