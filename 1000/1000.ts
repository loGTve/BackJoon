const input: string = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A: number = +input[0];
const B: number = +input[1];

console.log(A + B);