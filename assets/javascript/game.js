//declare variables
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
// var gemValue = [1,2,3,4,5,6,7,8,9,10,11,12];
var gemArray=[0,0,0,0];
var randomNumber = 0;



//generate random number that displays on screen between 19 and 120 at the restart of each game
function updateHTML(){
    document.getElementById("wins").innerHTML = numberOfWins;
    document.getElementById("losses").innerHTML = numberOfLosses;
    document.getElementById("totalScore").innerHTML = totalScore;
    document.getElementById("randomNumber").innerHTML = randomNumber;
    }


function genRandomNumber(){

        randomNumber= Math.floor(Math.random()* 101)+18;
        updateHTML();

}


function updateScoreCounter(value){
    totalScore += value;
    updateHTML();
    checkWinLose();
}





function userClicksGem(gemIndex){
    
    // document.getElementById("red").innerHTML = Math.floor(Math.random() * gemValue);
    // document.getElementById("blue").innerHTML = Math.floor(Math.random() * gemValue);
    // document.getElementById("green").innerHTML = Math.floor(Math.random() * gemValue);
    // document.getElementById("yellow").innerHTML = Math.floor(Math.random() * gemValue);
    
   
    if(gemArray[gemIndex] == 0){
        gemArray[gemIndex] = Math.floor(Math.random() * 12)+1;
    }
updateScoreCounter(gemArray[gemIndex]);
    
}

function checkWinLose(){
    if(totalScore == randomNumber){
        numberOfWins +=1;
        resetGameValues();
        startNewGame();
    }

    if(totalScore > randomNumber){
        numberOfLosses +=1;
        resetGameValues();
        startNewGame();
    }
    
}


function resetGameValues(){
    totalScore = 0;
    randomNumber = 0;
    gemArray = [0,0,0,0];
}

function startNewGame(){
    genRandomNumber();
}

