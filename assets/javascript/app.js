var trivia = [{
        question: "What was the first character Walt Disney created?",
        answers: [
            { a1: "Mickey Mouse", value: false },
            { a2: "Goofy", value: false },
            { a3: "Donald Duck", value: false },
            { a4: "Oswald the Lucky Rabbit", value: true, pic: "oswald.gif" }
        ]
    },
    {
        question: "Which princess is known for wearing a green dress?",
        answers: [
            { a1: "Cinderella", value: false },
            { a2: "Tiana", value: true, pic: "tiana.gif" },
            { a3: "Ariel", value: false },
            { a4: "Snow White", value: false }
        ]
    },
    {
        question: "Who gave the opening speech of Walt Disney World?",
        answers: [
            { a1: "Roy Disney", value: true, pic: "roy_disney.gif" },
            { a2: "Walt Disney", value: false },
            { a3: "Julie Andrews", value: false },
            { a4: "Michael Eisner", value: false }
        ]
    },
    {
        question: "What animal is found on Mary Poppin's umbrella?",
        answers: [
            { a1: "Parrot", value: true, pic: "mary_umbrella.gif" },
            { a2: "Cat", value: false },
            { a3: "Goat", value: false },
            { a4: "Frog", value: false }
        ]
    },
    {
        question: "Who wakes Sleeping Beauty with a kiss?",
        answers: [
            { a1: "Prince Andrew", value: false },
            { a2: "Prince Philip", value: true, pic: "prince_phillip.gif" },
            { a3: "Prince Naveen", value: false },
            { a4: "Prince Charming", value: false }
        ]
    },
    {
        question: "'Let it Go' was made famous by what Disney movie?",
        answers: [
            { a1: "Frozen", value: true, pic: "elsa.gif" },
            { a2: "101 Dalmatians", value: false },
            { a3: "Cinderella", value: false },
            { a4: "Toy Story", value: false }
        ]
    },
    {
        question: "In 'The Lion King', what is Simba's mother's name?",
        answers: [
            { a1: "Nala", value: false },
            { a2: "Sarafina", value: false },
            { a3: "Zazu", value: false },
            { a4: "Sarabi", value: true, pic: "sarabi.gif" }
        ]
    },
    {
        question: "How long was Genie from 'Aladdin' stuck in the lamp?",
        answers: [
            { a1: "20,000 years", value: false },
            { a2: "15,000 years", value: false },
            { a3: "10,000 years", value: true, pic: "genie.gif" },
            { a4: "1,000 years", value: false }
        ]
    },
    {
        question: "What causes Pinocchio's nose to grow?",
        answers: [
            { a1: "Laughing", value: false },
            { a2: "Coughing", value: false },
            { a3: "Lying", value: true, pic: "pinocchio.gif" },
            { a4: "Falling", value: false }
        ]
    },
    {
        question: "Which Disney movie features the song 'Two Worlds'?",
        answers: [
            { a1: "The Little Mermaid", value: false },
            { a2: "The Princess and the Frog", value: false },
            { a3: "The Aristocats", value: false },
            { a4: "Tarzan", value: true, pic: "tarzan.gif" }
        ]
    }
];

var quesNum, correct, incorrect, unanswered;
var quesSeconds = 20,
    resultSeconds = 6;
var intervalId, number;
var mode; // 1 for question screen, 2 for result screen

function stopTimer() {
    clearInterval(intervalId);
};

function runTimer() {
    number--;
    if (mode === 1) {
        $("#remaining").text("Time remaining: " + number + " seconds");
        if (number === 0) {
            stopTimer();
            displayResult(-2);
        }
    } else { // mode equals 2
        if (number === 0) {
            stopTimer();
            quesNum++;
            if (quesNum < trivia.length) {
                nextQuestion();
            } else {
                displayStats();
            };
        };
    }
};

function nextQuestion() {
    $("#question").text(trivia[quesNum].question);
    $("#a1").text(trivia[quesNum].answers[0].a1);
    $("#a2").text(trivia[quesNum].answers[1].a2);
    $("#a3").text(trivia[quesNum].answers[2].a3);
    $("#a4").text(trivia[quesNum].answers[3].a4);

    $("#start").hide();
    $("#correct-text").hide();
    $("#gif").hide();
    $("#stats").hide();

    $("#remaining").show();
    $("#question").show();
    $(".answer").show();

    mode = 1;
    number = quesSeconds;
    $("#remaining").text("Time remaining: " + number + " seconds");
    intervalId = setInterval(runTimer, 1000);
}

function displayResult(result) {
    var answer;
    var src = "assets/images/"
    for (i = 0; i < trivia[quesNum].answers.length; i++) {
        if (trivia[quesNum].answers[i].value) {
            switch (i) {
                case 0:
                    answer = trivia[quesNum].answers[i].a1;
                    break;

                case 1:
                    answer = trivia[quesNum].answers[i].a2;
                    break;

                case 2:
                    answer = trivia[quesNum].answers[i].a3;
                    break;

                case 3:
                    answer = trivia[quesNum].answers[i].a4;
            }
            $("#correct-text").text("The correct answer is: " + answer);
            $("#gif").attr("src", src + trivia[quesNum].answers[i].pic);
        };
    };

    switch (result) {
        case -1:
            $("#question").text("Wrong!");
            incorrect++;
            break;
        case -2:
            $("#question").text("Unanswered!");
            unanswered++;
            break;
        default:
            correct++;
            $("#question").text("Correct!");
    }

    if (result < 0) {
        $("#correct-text").show();
    };

    $(".answer").hide();
    $("#gif").show();

    mode = 2;
    number = resultSeconds;
    intervalId = setInterval(runTimer, 1000);
};

var displayStats = function() {
    $("#question").text("All done! Here's how you did:");
    $("#correct-text").hide();
    $("#gif").hide();
    $("#stats").html("Correct answers: " + correct + "<br>Incorrect answers: " + incorrect + "<br>Unanswered: " + unanswered);
    $("#stats").show();
    $("#start").text("TRY AGAIN");
    $("#start").show();
}

$("#start").on("click", function() {
    quesNum = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    nextQuestion();
});

$(".answer").on("click", function() {
    stopTimer();
    var index = parseInt($(this).data("index"));
    if (trivia[quesNum].answers[index].value) {
        displayResult(index);
    } else {
        displayResult(-1);
    };
});