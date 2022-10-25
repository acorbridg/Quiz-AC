var questions = [ 
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "booleans",
            b: "strings",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c",
    },
    {   
        question: "The conditions of an if/else statement is enclosed with ______.",
        answers: {
            a: "curly brackets",
            b: "parenthesis",
            c: "quotations",
        },
        correctAnswer: "b"
    },
    {   
        question: "Arrays in Javascript can be used to store ______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {   
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
            a: "double quotations",
            b: "parenthesis",
            c: "curly brackets",
        },
        correctAnswer: "a"
    },
    {   
        question: "A very useful tool used during development and debugging for printing content to the debugger is _______.",
        answers: {
            a: "Javascript",
            b: "terminal /bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "d"
    }

]
   


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        
        var output = [];
        var answers = questions.answers;
        
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>' 
                        + '<input type="radio" class="answer" question="'+i+'" name="question'+i+'" value="'+letter+'">'
                        + letter + ':'
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div id="question'+i+'Parent" class="Parent"> <div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div> </div>'
            );
        }
        quizContainer.innerHTML = output.join('');
        }
    
    
    showQuestions(questions, quizContainer);
}
function showResults(questions, quizContainer, resultsContainer, questionindex ){
        
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var resultCorrect = "Correct!";
    
        userAnswer = (answerContainers[questionindex].querySelector('input[name=question'+questionindex+']:checked')||{}).value;
     
        if(userAnswer===questions[questionindex].correctAnswer){        
            answerContainers[questionindex].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionindex].style.color = 'red';
            resultCorrect = "Wrong!"
        }
    

    // show number of correct answers out of total
    resultsContainer.innerHTML =  resultCorrect;
}
	


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('generate');
var answerButton = document.getElementsByClassName("answer");
var questionIndex = null;
var currentQuestionIndex = 0

console.log('this is before the loop')

function addOnClickListener(i) {
    answerButton[i].onclick = function(){
        questionIndex=this.getAttribute('question')
        showResults(questions, quizContainer, resultsContainer, questionIndex);
    };
}


function answerClick(){
    for (var i=0; i < answerButton.length; i++) {
        addOnClickListener(i)
        
    }
}
function clearResult(resultsContainer){
    resultsContainer.innerHTML = "";
}
function onstart () {
    var beginningQuestion = document.getElementById('question0Parent');
    beginningQuestion.classList.add("visible");
}

generateQuiz(questions, quizContainer, resultsContainer, submitButton);
onstart();
answerClick();


    submitButton.onclick = function(){
        clearResult(resultsContainer);
        var currentQuestion = document.getElementById('question'+currentQuestionIndex+'Parent');
        currentQuestion.classList.remove("visible");
        
        
        currentQuestionIndex++
        currentQuestion = document.getElementById('question'+currentQuestionIndex+'Parent');
        currentQuestion.classList.add("visible");

    }

setInterval.onclick = function(){
    
}