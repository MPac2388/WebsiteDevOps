function submitData() {
    let min = guessForm.min.value;
    let max = guessForm.max.value;
    console.log(min)
    console.log(max)

    if (min == "" || max == "") {
        updateDOM('Enter a valid number', 'red');
        return false;

    }
    if (min > max) {
        updateDOM('Enter a number less than 100', 'red');
        return false;
    };

    numberGuessGame(min, max)
    return false;
}

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;

}

function numberGuessGame(min, max) {
    let number_of_guesses = 0;
    let num = Math.ceil(randomNumber(min, max))
    let guess;
    let message ="Im thinking of a cool number" + min + ' and ' + max + ' Try to guess it.';
    console.log(num);

    do {
        if (guess < num) {
            message ="Wow your number is too low";
        }
        if (guess > num) {
            message ="Wow your number is too high";
        }

        number_of_guesses++;
        
        guess = parseInt(prompt(message))
    } while (guess !== num); 

    message = "You have done it! Well done! You guessed it in " + number_of_guesses + " guesses";

    updateDOM(message, 'green')

}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}