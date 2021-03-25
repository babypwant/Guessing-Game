const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretnumber = 5;


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
        let res = checkGuess(answer)
        console.log(res)
        rl.close();
    });
}
askGuess();
