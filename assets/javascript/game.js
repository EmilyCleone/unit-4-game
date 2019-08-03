//declare variables
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
var gemList=[0,0,0,0];
var randomNumber = 0;


resetGameValues();
startNewGame();

function updateValues(){
    document.getElementById("wins").innerHTML = numberOfWins;
    document.getElementById("losses").innerHTML = numberOfLosses;
    document.getElementById("totalScore").innerHTML = totalScore;
    document.getElementById("randomNumber").innerHTML = randomNumber;
    }

//generate random number that displays on screen between 19 and 120 at the restart of each game
function genRandomNumber(){

        randomNumber= Math.floor(Math.random()* 101)+18;

}


function updateScoreCounter(value){
    totalScore += value;
    updateValues();
    checkWinLose();
}





function userClicksGem(gemIndex){
   
    if(gemList[gemIndex] === 0){
        gemList[gemIndex] = Math.floor(Math.random() * 12)+1;
    }
updateScoreCounter(gemList[gemIndex]);
    
}

function checkWinLose(){
    if(totalScore === randomNumber){
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
    gemList = [0,0,0,0];
}

function startNewGame(){
    genRandomNumber();
};

