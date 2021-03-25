const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretnumber = randomInRange(0, 100);

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
        let res = checkGuess(answer);
        if (!res) {
            askGuess();
        } else {
            console.log('You Win!');
            rl.close();
        }
    });
}

function askRange(){
    rl.question("Enter a max number: ", (answer1) => {
        rl.question("Enter a min number: ", (answer2) =>{
            console.log("min entered ");
            rl.close();
        });
    });

}
//askGuess();
askRange();
