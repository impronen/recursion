#!/usr/bin/env node

let sortThis = [5, 2, 1, 10];

function recursiveSplitter(array) {
  // Base case
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2); // find center
  const leftSide = array.slice(0, middle); // Split left from the center to index 0
  const rightSide = array.slice(middle, array.length); // Split right from center to array end
  left;
  return merger(recursiveSplitter(leftSide), recursiveSplitter(rightSide));
}

function merger(leftArray, rightArray) {
  const resultArray = [];

  let leftC = 0;
  let rightC = 0;

  while (leftC < leftArray.length && rightC < rightArray.length) {
    if (leftArray[leftC] < rightArray[rightC]) {
      resultArray.push(leftArray[leftC++]);
    } else {
      resultArray.push(rightArray[rightC++]);
    }
  }
  while (leftC < leftArray.length) {
    resultArray.push(leftArray[leftC++]);
  }
  while (rightC < rightArray.length) {
    resultArray.push(rightArray[rightC++]);
  }
  console.log(resultArray);
  return resultArray;
}

function mergeSort(arrayToSort) {
  recursiveSplitter(sortThis);
  console.log("ALL DONE");
}

console.log(mergeSort(sortThis));

/*   
Aborted first attempt
if (arrayToSort.length === 1) {
    return arrayToSort;
  }
  // The array contains at least two items,
  const middle = Math.ceil(arrayToSort.length / 2);
  const leftArray = arrayToSort.splice(0, middle);
  const rightArray = arrayToSort;
  console.log(`the left is ${leftArray} and right is ${rightArray}`);
  console.log(`sorted left ${sortedLeft}`);
  let sortedLeft = [].concat(mergeSort(leftArray));
  console.log(`sorted left ${sortedLeft}`);
  let sortedRight = [].concat(mergeSort(rightArray));
  console.log(`sorted right ${sortedRight}`);
  if (sortedLeft && sortedRight != undefined) {
    if (leftArray[0] > rightArray[0]) {
      let newArray = [].concat(rightArray).concat(leftArray);
      console.log(`new combined array is ${newArray}`);
      return newArray;
    }
  } */
