var score = 0;
var questionIndex = 0;

var questions = [
    {
        question:"Commonly used data types Do Not include:",
        options: ["strings","booleans","alerts","numbers"],
        answer:"alerts"
    },
    
    {
        question:"The condition in an if/else statement is enclosed within ____.",
        options: ["quotes","curly brackets","parentheses","square brackets"],
        answer:"parenthese"
    },
    
    {
        question:"Arrays in JavaScript can be used to store ____.",
        options: ["numbers and strings","other arrays","booleans","all of the above"],
        answer:"all of the above"
    },
    
    {
        question:"Strings values must be enclosed within _____ when being assigned to variables.",
        options: ["commas","curly brackets","quotes","parenthese"],
        answer:"quotes"
    },

    {
        question:"A very useful tool for used during development and debugging for printing content to debugger is:",
        options: ["JavaScript","terminal/bash","for loops","console.log"],
        answer:"console.log"
    }
];

document.addEventListener("DOMContentLoaded",() =>{
    var timeLeftDisplay = document.getElementById("time-left")
    var startBtn = document.getElementById("start-btn")
    var penalty = 10;
    var timeLeft = 75;
    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1;
        },1000)
    }
    startBtn.addEventListener("click", function(){
        countDown();
        document.getElementById("start-page").style.display = "none";
        document.getElementById("quizContent").style.display ="block";
    });
    render(questionsIndex)
});

function render(questionIndex) {

}