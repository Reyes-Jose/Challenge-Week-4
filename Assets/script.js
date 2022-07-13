var startButton = document.getElementById("startBtn");
var questionContainer = document.getElementById("questionContainer");

var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 2,        
    },
    {
        question: "The condition in an if/else statement is enclosed with ______:",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parenthesis",
        choice4: "Square Brackets",
        answer: 3,
    },
    {
        question: "Arrays in javascript can be used to store: ",
        choice1: "Numbers and Strings",
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        answer: 4,
    },


]



startButton.addEventListener("click", startQuiz);


function startQuiz(){
    timer();
    
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    showQuestion();
}



function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}










