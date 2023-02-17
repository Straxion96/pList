var counter = 0;
var ary1 = [];

function onClick(){
if ( guess > 0 || guess < num_max) {
    return counter ++;
    
}
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
    console.log(`${guess}`)

    for(let i = 0; i < num_max.length; i++) {
    ary1.push(0); 
    }

    if (guess == num) {
        counter++;
        console.log(ary1.push(guess));
        console.log(ary1,counter);
        message.innerHTML = `You got it! It took you ${counter} tries and your guesses were ${ary1}`;
        
    }

    else if (guess > num_max || guess < 1) {
        message.innerHTML = "That number is not in range, try again.";
    }

    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        counter++;
        console.log(ary1.push(guess));
        console.log(ary1,counter);
    }

    else if (guess < num) {
        message.innerHTML = "No, try a higher number.";
        counter++;
        
        console.log(ary1.push(guess));
        console.log(ary1,counter);
    }

    else {
        message.innerHTML = "That is not a number!";
    }
}

    // Start-up popup box with max number count
let valid_input = false;
let num_max, input;

while(!valid_input) {
    input = window.prompt("What should the max number be?");

    num_max = Math.floor(Number(input));

    if(num_max != NaN && num_max > 0) {
        valid_input = true;
        console.log(`The number input is ${num_max}!`);
    }
}

let num = Math.floor(Math.random() *num_max) + 1;
console.log(num);

let guess_num = document.getElementById("guessNum")
guess_num.innerText = `Guess a number bewteen 1 and ${num_max}`;