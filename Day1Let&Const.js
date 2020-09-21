'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
//strict mode global 
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r =readLine();//readline for waiting users 
    // Print the area of the circle:
    const PI=Math.PI;
    console.log(PI*r*r);
    // Print the perimeter of the circle:
console.log(2*PI*r);
    try {    
