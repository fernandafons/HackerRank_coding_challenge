// Task
// Given an integer, n, print its first 10 multiples. Each multiple n x i 
// (where 1 <= i <= 10) should be printed on a new line in the form: n x i = result.

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
    // create a for loop and print n x i = result
    for (let i = 1; i <= 10; i++){
        let result = n * i
        console.log(n, 'x', i, '=', result);
    }
    return null;
}
