const squares = document.querySelectorAll(".square");

let usedSquares = new Map();

let i = 0;

let winner = false;

let draw = false;

let whichLetterWon = "";

const whoWonMessage = document.createElement('p');
const displayMessage = document.querySelector('#display-message');
displayMessage.appendChild(whoWonMessage);

function fillTheSquares() { 

    squares.forEach(square => {
        square.addEventListener('click', function() {
            
            let pressedSquare = square.id;

            if(winner === true) {
                reset();
            }

            else if(draw === true) {
                reset();
            }

            else if(i % 2 === 0 && !usedSquares.has(pressedSquare)) {
                square.innerHTML = "X";
                square.style.color = "#F26A6F";
                usedSquares.set(pressedSquare, "X");
                i++;
                winnerCheck();

            } else if(i % 2 === 1 && !usedSquares.has(pressedSquare)) {
                square.innerHTML = "O";
                square.style.color = "#4891E6";
                usedSquares.set(pressedSquare, "O");
                i++;
                winnerCheck();                
            } 
        });
    });
}

function winnerCheck() {
    // checks 8 possible lines

    if(usedSquares.size >= 5 && usedSquares.size < 10) {

        // First Row
        if(usedSquares.get("1") != undefined && usedSquares.get("1") != "" && usedSquares.get("1") === usedSquares.get("2") 
        && usedSquares.get("2") === usedSquares.get("3")) {
            console.log("WINNER");
            winner = true;
            whichLetterWon = usedSquares.get("1");          
        }
        // Second Row
        else if(usedSquares.get("4") != undefined && usedSquares.get("4") != "" && usedSquares.get("4") === usedSquares.get("5") 
        && usedSquares.get("5") === usedSquares.get("6")) {
            console.log("WINNER SECOND ROW");
            winner = true;
            whichLetterWon = usedSquares.get("4"); 
        }
        // Third Row
        else if(usedSquares.get("7") != undefined && usedSquares.get("7") != "" && usedSquares.get("7") === usedSquares.get("8")
         && usedSquares.get("8") === usedSquares.get("9")) {
            console.log("WINNER THIRD ROW");
            winner = true;
            whichLetterWon = usedSquares.get("7"); 
        }
        // First Column
        else if(usedSquares.get("1") != undefined && usedSquares.get("1") != "" && usedSquares.get("1") === usedSquares.get("4")
         && usedSquares.get("4") === usedSquares.get("7")) {
            console.log("WINNER FIRST COLUMN");
            winner = true;
            whichLetterWon = usedSquares.get("1"); 
        }
        // Second Column
        else if(usedSquares.get("2") != undefined && usedSquares.get("2") != "" && usedSquares.get("2") === usedSquares.get("5")
         && usedSquares.get("5") === usedSquares.get("8")) {
            console.log("WINNER SECOND COLUMN");
            winner = true;
            whichLetterWon = usedSquares.get("2"); 
        }
        // Third Column
        else if(usedSquares.get("3") != undefined && usedSquares.get("3") != "" && usedSquares.get("3") === usedSquares.get("6")
         && usedSquares.get("6") === usedSquares.get("9")) {
            console.log("WINNER THIRD COLUMN");
            winner = true;
            whichLetterWon = usedSquares.get("3"); 
        }
        // First Diagonal
        else if(usedSquares.get("1") != undefined && usedSquares.get("1") != "" && usedSquares.get("1") === usedSquares.get("5")
         && usedSquares.get("5") === usedSquares.get("9")) {
            console.log("WINNER FIRST DIAGONAL");
            winner = true;
            whichLetterWon = usedSquares.get("1"); 
        }
        // Second Diagonal
        else if(usedSquares.get("3") != undefined && usedSquares.get("3") != "" && usedSquares.get("3") === usedSquares.get("5") 
        && usedSquares.get("5") === usedSquares.get("7")) {
            console.log("WINNER SECOND DIAGONAL");
            winner = true;
            whichLetterWon = usedSquares.get("3"); 
        }
        else if(usedSquares.size === 9) {     
            draw = true;
        }      
    }

   

    if(winner === true) {

        if(whichLetterWon === "X") {
            whoWonMessage.textContent = "Crosses wins!";
            whoWonMessage.style.color = "#F26A6F";
        } else if(whichLetterWon === "O") {
            whoWonMessage.textContent = "Naughts wins!"
            whoWonMessage.style.color = "#4891E6";
        }
  
    }

    if(draw === true) {
        whoWonMessage.textContent = "It's a draw!";
        whoWonMessage.style.color = "rgb(37, 37, 37)";
    }
}

// Reset Button
const button = document.querySelector('#btn');
button.addEventListener('click', function() {
    reset();
});

function reset() {
    usedSquares = new Map();
    squares.forEach(square => {
        square.innerHTML = "";
    });
    i = 0;
    winner = false;
    draw = false;
    whoWonMessage.textContent = null;
}


fillTheSquares();

