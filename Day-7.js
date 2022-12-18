// Task
// Given an array, A, of N integers, print A's elements in 
// reverse order as a single line of space-separated numbers.

// Example

// A = [1, 2, 3, 4]
// Print 4 3 2 1. Each integer is separated by one space.

// Solution
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const reversed = arr.reverse();
    console.log(reversed.toString().replaceAll(',', ' '))
}
