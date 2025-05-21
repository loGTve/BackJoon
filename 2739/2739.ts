const input: string = require('fs').readFileSync('/dev/stdin').toString();
const A = +input[0];

for(let gu = 0; gu <=9; gu++){
    console.log(A + ' * ' + gu + ' = ' + A*gu);
}