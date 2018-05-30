function populate(){
    if(quiz.isEnded()) {
        showScore();
    }
    else {
        //show Question();
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //shochoices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML= "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScore() {
var gameOverHtml = "<h1>Result</h1>";
gameOverHtml += "<h2 id='score'>Your scores:"  + quiz.score +" </h2> ";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHtml;
};


var questions = [
    new Question("which one is not an object oriented programming language?", ["Java","C#","C++","C"], "C"),
    new Question("Which language is used for styling web page?", ["HTML","JQuery","CSS","XML"], "CSS"),
    new Question("There are______main components of object oriented programming.", ["1", "2", "6", "4"], "4"),
    new Question("which language is used for web apps?", ["PHP","Python","JavaScript","ALL"], "ALL"),
    new Question("MVC is a ______.",["Language","Library","Framework","ALL"],"Framework")
];

var quiz = new Quiz(questions);

populate();