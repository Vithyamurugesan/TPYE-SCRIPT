import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a 3-digit number: ", (input) => {

    let num: number = Number(input);
    let temp: number = num;
    let sum: number = 0;

    while (temp > 0) {
        let digit = temp % 10;              // Get last digit
        sum = sum + (digit * digit * digit); // Cube of digit
        temp = Math.floor(temp / 10);       // Remove last digit
    }

    if (sum === num) {
        console.log(num + " is an Armstrong Number");
    } else {
        console.log(num + " is NOT an Armstrong Number");
    }

    rl.close();
});