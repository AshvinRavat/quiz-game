$(document).ready(function () {
    $("#start-quiz-popup").modal('show')
});

currentQuestionIndex = 0;
secondsLeftToCompleteQuiz = 60;
isTimedOut = false;
lastQuestionIndex = 0;
userSelectedAnswers = [];
quizTimer = '';

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
    lastQuestionIndex = questions.length - 1;
    document.getElementById("question-container").style = "display: block";
    showCurrentQuestion();
    startTimer();
}

function showCurrentQuestion() {

    document.getElementById("questions-title").innerHTML = questions[currentQuestionIndex]['question'];

    var unCheckingAnswers = document.getElementsByName("options");

    for (i = 0; i < unCheckingAnswers.length; i++) {
        unCheckingAnswers[i].checked = false;
    }

    if (userSelectedAnswers.includes(questions[currentQuestionIndex]['correct_answer'])) {
         document.getElementById("for-option1").checked = true;
    }

    if (userSelectedAnswers.includes(questions[currentQuestionIndex]['incorrect_answers'][0])) {
         document.getElementById("for-option2").checked = true;
    }

    if (userSelectedAnswers.includes(questions[currentQuestionIndex]['incorrect_answers'][1])) {
         document.getElementById("for-option3").checked = true;
    }

    if (userSelectedAnswers.includes(questions[currentQuestionIndex]['incorrect_answers'][2])) {
         document.getElementById("for-option4").checked = true;
    }

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
   quizTimer = setInterval(
        function () {
        secondsLeftToCompleteQuiz = secondsLeftToCompleteQuiz - 1;
           document.getElementById("timer").innerHTML = secondsLeftToCompleteQuiz;

            if (secondsLeftToCompleteQuiz < 1) {
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

    totalCorrectAnswers = 0;
    document.getElementById("question-container").style = "display: none";

    if (isTimedOut) {
        document.getElementById("time-out").innerHTML = "Your Timed Out !";
    }
    submitAnswers();
    clearInterval(quizTimer);
}

function submitAnswers() {
    for (i = 0; i <= currentQuestionIndex; i++) {
        if (questions[i]['correct_answer'] == userSelectedAnswers[i]) {
            totalCorrectAnswers++;
        }
        document.getElementById("correct-answers").innerHTML = totalCorrectAnswers;
    }
}
function setUserSelectedAnswer() {
    selectedAnswer = document.getElementsByName('options');

    for (i = 0; i < selectedAnswer.length; i++) {
        if (selectedAnswer[i].checked) {
            userSelectedAnswers[currentQuestionIndex] = selectedAnswer[i].value;
        }
    }
}

function updateActionButtons() {
    document.getElementById("previous-button").disabled = true;
    document.getElementById("next-button").disabled = true;
    document.getElementById("submit-button").disabled = true;

    if (typeof userSelectedAnswers[currentQuestionIndex] !== 'undefined' && currentQuestionIndex < lastQuestionIndex) {
        document.getElementById("next-button").disabled = false;
    }

    if (currentQuestionIndex > 0) {
        document.getElementById("previous-button").disabled = false;
    }

    if (userSelectedAnswers.length == questions.length)
    {
        document.getElementById("submit-button").disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    updateActionButtons();
    showCurrentQuestion();
}

function previousQuestion() {
    currentQuestionIndex--;
    updateActionButtons();
    showCurrentQuestion();
}