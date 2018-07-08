//Global Variables
var wins = 0;
var losses = 0;
var gameOver = true;
var currentNumberValue = 0;

//shorthand functions for displays
function writeCurrent() {
    $("#displayCurrentNumber").text(currentNumberValue);
}

function writeTarget() {
    $("#displayTargetNumber").text(targetNumberValue);
}

function writeLoss() {
    $("#displayLosses").text("Losses: " + losses);
}

function writeWin() {
    $("#displayWins").text("Wins: " + wins);
}

// chooses numbers for crystals, chooses target number, sets current to 0.
function gameStart() {
    console.log("Game Start.");
    gameOver = false;
    blueCrystalValue = Math.floor(Math.random() * 5) + 1;
    console.log("Blue: " + blueCrystalValue);
    greenCrystalValue = Math.floor(Math.random() * 5) + 6;
    console.log("Green: " + greenCrystalValue);
    redCrystalValue = Math.floor(Math.random() * 10) + 11;
    console.log("Red: " + redCrystalValue);
    yellowCrystalValue = Math.floor(Math.random() *20) + 21;
    console.log("Yellow: " + yellowCrystalValue);
    targetNumberValue = Math.floor(Math.random() * 100) + 50;
    console.log("Target: " + targetNumberValue);
    writeTarget();
    currentNumberValue = 0;
    console.log("Current: " + currentNumberValue);
    writeCurrent();
}

// resest for game
function gameStateCheck() {
    if(gameOver) {
        gameStart();
    }
}

// checks for game enders
function statusCheck() {
    if(currentNumberValue < targetNumberValue) {
        writeCurrent();       
    }

    else if (currentNumberValue === targetNumberValue) {
        writeCurrent();
        gameOver = true;
        wins++;
        writeWin();
        gameStateCheck();
    }

    else if(currentNumberValue > targetNumberValue) {
        writeCurrent();
        gameOver = true;
        losses++;
        writeLoss();
        gameStateCheck();       
    }
}

// On clicks for each crystal, adds crystal value to current.
$("#blueCrystal").on("click", function() {
    gameStateCheck();
    currentNumberValue += blueCrystalValue;
    console.log("Current: " + currentNumberValue);
    statusCheck();
});

$("#greenCrystal").on("click", function() {
    gameStateCheck();
    currentNumberValue += greenCrystalValue;
    console.log("Current: " + currentNumberValue);
    statusCheck();
});

$("#redCrystal").on("click", function() {
    gameStateCheck();
    currentNumberValue += redCrystalValue;
    console.log("Current: " + currentNumberValue);
    statusCheck();
});

$("#yellowCrystal").on("click", function () {
    gameStateCheck();
    currentNumberValue += yellowCrystalValue;
    console.log("Current: " + currentNumberValue);
    statusCheck();
});

