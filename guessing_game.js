const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretnumber;
let numAttempts;

function randomInRange(min, Range) {
    min = Math.ceil(min);
    Range = Math.floor(Range);
    return Math.floor(Math.random() * (Range - min + 1) + min);
}

let checkGuess = function (num) {
    if (isNaN(Number(num))) {
        console.log('Put in a number')
        return false;
    }
    if (secretnumber < num) {
        console.log("too high");
        return false;
    }
    else if (secretnumber > num) {
        console.log("too low");
        return false;
    }
    else {
        console.log("correct");
        return true;
    }
}

let askGuess = function () {
    rl.question('Enter a guess: ', (answer) => {
        numAttempts--;
        if (!checkGuess(answer)) {
            if (numAttempts === 0) {
                console.log("You Lose!");
                rl.close();
            }
            else {
                askGuess();
            }
        }
        else {
            console.log('You Win!');
            rl.close();
        }
    });
}
let askRange = (limit) => {
    numAttempts = limit;
    rl.question("Enter a max number: ", (max) => {
        rl.question("Enter a min number: ", (min) => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretnumber = randomInRange(min, max);
            askGuess();
        });
    });
}

rl.question("Enter number of attempts: ", askRange);
