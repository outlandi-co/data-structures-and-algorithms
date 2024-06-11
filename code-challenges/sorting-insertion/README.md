# Insertion Sort

Insertion Sort is a simple and intuitive sorting algorithm. It works by dividing the array into a sorted and an unsorted part. Initially, the sorted part contains only the first element. The algorithm then iterates through the unsorted part, taking one element at a time and inserting it into its correct position in the sorted part. This process continues until all elements are sorted.

Big O Complexity

Time Complexity:

Worst-case:
𝑂(𝑛2)
O(n2) - when the array is in reverse order.
Best-case:
𝑂(𝑛)
O(n) - when the array is already sorted.

Average-case:
𝑂(𝑛2)
O(n2).
Space Complexity:
𝑂(1)
O(1), as it sorts the array in-place.
Pseudocode for Insertion Sort
Here is the pseudocode for the Insertion Sort algorithm:

css
Copy code

Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

Implementation in Node.js
Here is how you can implement the Insertion Sort algorithm in Node.js:

javascript
Copy code
function insert(sortedArr, value) {
    let i = 0;
    while (i < sortedArr.length && value > sortedArr[i]) {
        i++;
    }
    sortedArr.splice(i, 0, value);
}

function insertionSort(inputArr) {
    const sortedArr = [inputArr[0]];
    for (let i = 1; i < inputArr.length; i++) {
        insert(sortedArr, inputArr[i]);
    }
    return sortedArr;
}

// Export the functions for testing
module.exports = insertionSort;
Setting Up Tests with Jest and Supertest

Step 1: Initialize Your Node.js Project
Run the following command in your project directory to initialize a new Node.js project:

bash
Copy code
npm init -y

Step 2: Install Jest and Supertest
Install Jest and Supertest as development dependencies:

bash
Copy code
npm install --save-dev jest supertest

Step 3: Configure Jest
Add the following script to your package.json file to run Jest tests:

json
Copy code

"scripts": {
  "test": "jest"
}
Step 4: Write Test Cases
Create a test file (e.g., insertionSort.test.js) in your project directory:

javascript
Copy code
const insertionSort = require('./insertionSort');

test('sorting [8, 4, 23, 42, 16, 15] returns [4, 8, 15, 16, 23, 42]', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
});

test('sorting [20, 18, 12, 8, 5, -2] returns [-2, 5, 8, 12, 18, 20]', () => {
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
});

test('sorting [5, 12, 7, 5, 5, 7] returns [5, 5, 5, 7, 7, 12]', () => {
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
});

test('sorting [2, 3, 5, 7, 13, 11] returns [2, 3, 5, 7, 11, 13]', () => {
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
});

Step 5: Run Your Tests
Run the tests using the following command:

bash
Copy code
npm test

If everything is set up correctly, you should see output indicating that all tests have passed.

Conclusion
Insertion Sort is a straightforward algorithm suitable for small or nearly sorted arrays. While its
𝑂(𝑛2)
O(n2) time complexity makes it inefficient for large datasets, its simplicity and in-place sorting capabilities make it useful in certain scenarios. By using Jest, you can ensure your implementation is correct and robust through comprehensive testing.
