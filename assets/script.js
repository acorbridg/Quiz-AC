var questions = [ 
    {
        question: "what is the velocity of an unlaiden swallow?",
        answers: {
            a: "3",
            b: "2",
            c: "24 mph",
        },
        correctAnswer: "c",
    },
    {   
        question: "what is your favorite color?",
        answers: {
            a: "blue",
            b: "pink",
            c: "blue...no pink",
        },
        correctAnswer: "c"
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
        // code will go here
        // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var resultCorrect = "FATALITY";
    
    // for each question...
    

        // find selected answer
        userAnswer = (answerContainers[questionindex].querySelector('input[name=question'+questionindex+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[questionindex].correctAnswer){
            // add to the number of correct answers
            
            
            // color the answers green
            answerContainers[questionindex].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[questionindex].style.color = 'red';
            resultCorrect = "KO"
        }
    

    // show number of correct answers out of total
    resultsContainer.innerHTML = resultCorrect;
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

