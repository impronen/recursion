#!/usr/bin/env node

let sortThis = [5, 2, 1, 3, 6, 4];

/// PSEUDOCODE

// We start by dividing the array into two equal parts, left and right
//

function mergeSort(arrayToSort) {
  console.log(arrayToSort);
  const middle = Math.ceil(arrayToSort.length / 2);
  const leftArray = arrayToSort.slice().splice(0, middle);
  const rightArray = arrayToSort.slice().splice(-middle);
  console.log(`the left is ${leftArray} and right is ${rightArray}`);
  if (arrayToSort.length > 2) {
    mergeSort(leftArray);
    mergeSort(rightArray);
  } else {
    console.log("ELSE AAARGH");
    if (leftArray[0] > rightArray[0]) {
      let newArray = [].concat(rightArray).concat(leftArray);
      console.log(`tis merged ${newArray}`);
      console.log(newArray);
    } else {
      let newArray = [].concat(leftArray).concat(rightArray);
      console.log(`tis merged ${newArray}`);
    }
  }
}

console.log(mergeSort(sortThis));
