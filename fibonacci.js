#!/usr/bin/env node

function fibs(number) {
  let first = 0;
  let second = 1;
  let next = undefined;
  let returnArray = [];
  for (let i = 0; i < number; i++) {
    returnArray.push(first); // the first variable is pushed to array
    next = first + second; // next one is calculated by adding n1 + n2
    first = second; // the second variable is replaced by the first, which was pushed
    second = next; // the first is reset with the next, which is the result of n1 + n2
  }
  console.log(returnArray); // [ 0, 1, 1,  2, 3, 5, 8, 13]
  return returnArray;
}

// fibs(8);

function fibsRec(number, n1, n2) {
  if (number === 0) {
    return [];
  }
  let next = n1 + n2;
  return [n1].concat(fibsRec(number - 1, n2, next));
  //n1 is first placed to array, then we call the function again inside concat
  //to concat the next result to the array until n is 0
}

let test = fibsRec(12, 0, 1);
console.log(test); // [ 0, 1, 1,  2, 3, 5, 8, 13]
