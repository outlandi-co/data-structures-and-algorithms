// sorting-insertion.js
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

module.exports = {
  insertionSort,
  insert
};
