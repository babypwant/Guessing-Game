const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretnumber;

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let checkGuess = function (num) {
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
        if (!checkGuess(answer)) {
            askGuess();
        } else {
            console.log('You Win!');
            rl.close();
        }
    });
}
let askMax = (max) => {
    rl.question("Enter a min number: ", (min) => {
        console.log(`I'm thinking of a number between ${min} and ${max}...`);
        secretnumber = randomInRange(min, max);
        askGuess();

    });
}

rl.question("Enter a max number: ", askMax);


