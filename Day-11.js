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
    // set the maxvalue
    let maxSum = -63 // -9 x 7
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    // loop through columns
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
    // create variables for the sum of the elements of the hourglass
            let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let middle = arr[i+1][j+1];
            let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let currentSum = top + middle + bottom;
            maxSum = Math.max(currentSum, maxSum);
        }
    }
    console.log(maxSum);
    
}
