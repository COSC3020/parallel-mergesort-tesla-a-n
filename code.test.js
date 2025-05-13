const { parallelMergeSort } = require('./parallelMergeSort');

async function runTests() {
    const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    console.log('Original:', data);

    const parallelMergeSortedData = await parallelMergeSort(data);
    console.log('parallelMergeSorted:', parallelMergeSortedData);

    const expected = [...data].parallelMergeSort((a, b) => a - b);
    console.assert(
        JSON.stringify(parallelMergeSortedData) === JSON.stringify(expected),
        'Test failed: parallelMergeSorting does not match expected result'
    );

    if (JSON.stringify(parallelMergeSortedData) === JSON.stringify(expected)) {
        console.log('Test passed!');
    } else {
        console.error('Test failed!');
    }
}

runTests().catch(console.error);
