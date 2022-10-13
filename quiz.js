$(document).ready(function () {
    $("#start-quiz-popup").modal('show')
});

currentQuestionIndex = 0;
secondsLeftToCompleteQuiz = 10;
isTimedOut = false;

const questions =
[
    {
        question: "Q1: Full Form Of Css?",
        correct_answer: "Cascading Style Sheets",
        incorrect_answers:
        [
            "Cascading Sheets Style",
            "Cascading Start Style",
            "Cascading Style Start"
        ]
    },
    {
        question: "Q2: Full Form Of JS?",
        correct_answer: "Java Script",
        incorrect_answers:
        [
            "Java Sorting",
            "Java Styles",
            "Java Styling"
        ]
    },
    {
        question: "Q3: Full Form Of HTML",
        correct_answer: "Hyper Text Maker Language",
        incorrect_answers:
        [
            "HTML Language",
            "Hyper Text Markup Language",
            "HTML Languages"
        ]
    },
    {
        question: "Q4: Full Form Of PHP",
        correct_answer: "Personal Home Page",
        incorrect_answers:
        [
            "PHP Language",
            "Predefine Home Page",
            "Predefine Homes Pages"
        ]

    },
    {
        question: "Q5: Full Form Of AJAX ",
        correct_answer: "Asynchronous JavaScript And XML",
        incorrect_answers:
        [
            "AJAX",
            "Asynchronous JavaScript And Language.",
            "ajax pages"
        ]
    },
]

function startQuiz() {
    document.getElementById("question-container").style = "display: block";
    showCurrentQuestion();
    startTimer();
}

function showCurrentQuestion() {

    document.getElementById("questions-title").innerHTML = questions[currentQuestionIndex]['question'];

    document.getElementById("for-option1").value = questions[currentQuestionIndex]['correct_answer'];
    document.getElementById("option1").innerHTML = questions[currentQuestionIndex]['correct_answer'];

    document.getElementById("for-option2").value = questions[currentQuestionIndex]['incorrect_answers'][0];
    document.getElementById("for-option3").value = questions[currentQuestionIndex]['incorrect_answers'][1];
    document.getElementById("for-option4").value = questions[currentQuestionIndex]['incorrect_answers'][2];

    document.getElementById("option2").innerHTML = questions[currentQuestionIndex]['incorrect_answers'][0];
    document.getElementById("option3").innerHTML = questions[currentQuestionIndex]['incorrect_answers'][1];
    document.getElementById("option4").innerHTML = questions[currentQuestionIndex]['incorrect_answers'][2];

}

function startTimer() {
   var quizTimer = setInterval(
        function () {
        secondsLeftToCompleteQuiz = secondsLeftToCompleteQuiz - 1;
           document.getElementById("timer").innerHTML = secondsLeftToCompleteQuiz;

            if (secondsLeftToCompleteQuiz < 5) {
                clearInterval(quizTimer);
                isTimedOut = true;
                endQuizAndDisplayResult();
            }
        },
    1000);
}

function endQuizAndDisplayResult() {
    $(document).ready(function () {
        $("#result-modal").modal('show')
    });

    document.getElementById("question-container").style = "display: none";

    if (isTimedOut) {
        document.getElementById("time-out").innerHTML = "Your Timed Out !";
    }
}
