// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of 
//   the meal price being added as tip), and tax percent (the percentage of 
//     the meal price being added as tax) for a meal, find and print the meal's 
//     total cost. Round the result to the nearest integer.

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

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    // find out the costs of tip_percent and tax_percent
    const tip_cost = meal_cost * (tip_percent/100);
    const tax_cost = meal_cost * (tax_percent/100);
    // add all costs and round the total to the nearest integer
    const total =  Math.round(meal_cost + tax_cost + tip_cost);
    // print the value and return nothing
    console.log(total);
    return null;
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}