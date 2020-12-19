var highScores = document.querySelector("#highscoresPage");
var quizTimer = document.querySelector("#timer");

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