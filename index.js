let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");
let audio=new Audio("./music/guitarhappy.wav");
let audio1=new Audio("./music/christmas.wav");
let audio2=new Audio("./music/guitarnav.wav");
const init=() =>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};
const startGame=()=>{
    // audio1.play();s
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
};
// reload the page
const newGameBegin=()=>{
    audio1.play();
    window.location.reload();
}
// start new Game
const startNewGame=()=>{
    audio.pause();
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
}
const compareGuess=()=>{
    audio.play();
    const userNumber=Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    if(userGuess.length<maxGuess) { 
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML="Your guess is High! ";
        userNumberUpdate.value="";

    }
    else if(userNumber==computerGuess){
        userGuessUpdate.innerHTML="You Won!";
        audio.pause();
        audio1.play();
        userNumberUpdate.value="";
        startNewGame();
    }
    else {
        userGuessUpdate.innerHTML="Your guess is Low!";
        userNumberUpdate.value="";
        }
    } else{
        if(userNumber>computerGuess){
           userGuessUpdate.innerHTML= `You Loose ! The Correct Number Was ${computerGuess}`
            userNumberUpdate.value="";
            audio2.play();
            startNewGame();
        }
        else if(userNumber<computerGuess){
            userGuessUpdate.innerHTML=`You Loose! The Correct Number Was ${computerGuess}`
            userNumberUpdate.value="";
            audio2.play();
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML="You Won!";
            audio.pause();
            audio1.play();
            userNumberUpdate.value="";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML=userGuess.length;

};
const easyMode=()=>{
    audio1.play();
    maxGuess=10;
    startGame();
};
const hardMode=()=>{
    audio1.play();
    maxGuess=5;
    startGame();
};
