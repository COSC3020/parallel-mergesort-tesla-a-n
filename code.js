function mergesort(array) {
    let n = array.length;

    // Iteratively do subarrays of size width 1, 2, 4, ..., n
    for (let width = 1; width < n; width *= 2) {
        for (let left = 0; left < n - width; left += 2 * width) {
            let mid = left + width - 1;
            let right = Math.min(left + 2 * width - 1, n - 1);

            merge(array, left, mid, right); //Iterative, not recursive
        }
    }

    return array;
}

function merge(array, left, mid, right) {
    let i = left;      // Initial index of the first subarray
    let j = mid + 1;   // Initial index of the second subarray

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            i++;
        } else {
            // Element at j is smaller so pluck element j to temp and shift right until temp can be placed at i
            let temp = array[j];
            for (let k = j; k > i; k--) {
                array[k] = array[k - 1];
            }
            array[i] = temp;

            // Update index
            i++;
            j++;
            mid++;
        }
    }
}

async function parallelMergeSort(arr, threshold = 1000) {
  // For small arrays, use sequential mergesort
  if (arr.length <= threshold) {
    return mergeSort(arr);
  }
  
  // Split array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  // Sort both halves in parallel
  const [sortedLeft, sortedRight] = await Promise.all([
    parallelMergeSort(left, threshold),
    parallelMergeSort(right, threshold)
  ]);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

//const array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//console.log(mergesort(array1));
