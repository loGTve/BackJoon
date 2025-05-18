const input: string = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A: number = +input[0];
const B: number = +input[1];

if(A < B){
    console.log("<");
} else if(A > B){
    console.log(">");
} else{
    console.log("==");
}