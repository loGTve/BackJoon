import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input: string[] = [];

rl.on("line", (line: string) => {
    input.push(line);
}).on("close", () => {
        const userText: string = input[0];
        const userSubstr: number = +input[1];

        let result: string = userText.charAt(userSubstr-1);
        console.log(result);
    });