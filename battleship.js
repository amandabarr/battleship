// Three variables to hold the location of each part of the battlship (battleship is three cells long)

randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// Variable to hold the user's current guess

var guess;

// Variable to hold the number of hits

var hits = 0;

// Varible to hold the number of guesses

var guesses = 0;

// Variable to keep track of whether or not the ship is sunk

var isSunk = false;


while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0 to 6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!");

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}


// Variable to let user know how many guesses it took to sink the battleship

var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);

alert(stats);