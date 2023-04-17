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
  console.log(returnArray);
  return returnArray;
}

// fibs(8);

function fibsRec(number) {
  if (number === 0) {
    return;
  }
  console.log("BULLSHITS");
  return fibsRec(number - 1);
}

fibsRec(8);
