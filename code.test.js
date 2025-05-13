const { parallelMergeSort } = require('./parallelMergeSort');
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

/**
 * Creates an array with random numbers
 */
function createRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
}

/**
 * Simple test function to run all tests
 */
async function runTests() {
  console.log('Testing parallel mergesort...');
  
  // Test 1: Empty array
  const test1 = await parallelMergeSort([]);
  console.log('Empty array test:', isSorted(test1) ? 'PASSED' : 'FAILED');
  
  // Test 2: Single element
  const test2 = await parallelMergeSort([5]);
  console.log('Single element test:', isSorted(test2) ? 'PASSED' : 'FAILED');
  
  // Test 3: Already sorted array
  const test3 = await parallelMergeSort([1, 2, 3, 4, 5]);
  console.log('Sorted array test:', isSorted(test3) ? 'PASSED' : 'FAILED');
  
  // Test 4: Reversed array
  const test4 = await parallelMergeSort([5, 4, 3, 2, 1]);
  console.log('Reversed array test:', isSorted(test4) ? 'PASSED' : 'FAILED');
  
  // Test 5: Random small array
  const smallArray = createRandomArray(100);
  const test5 = await parallelMergeSort(smallArray);
  console.log('Small random array test:', isSorted(test5) ? 'PASSED' : 'FAILED');
  
