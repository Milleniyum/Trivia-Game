var questions = [
    {
        question: "What was the first character Walt Disney created?",
        answers: [
            { a1: "Mickey Mouse", correct: false },
            { a2: "Goofy", correct: false },
            { a3: "Donald Duck", correct: false },
            { a4: "Oswald the Lucky Rabbit", correct: true }]
    },
    {
        question: "Which princess is know for wearing a green dress?",
        answers: [
            { a1: "Cinderella", correct: false },
            { a2: "Tiana", correct: true },
            { a3: "Ariel", correct: false },
            { a4: "Snow White", correct: false }]
    },
    {
        question: "Who gave the opening speech of Walt Disney World?",
        answers: [
            { a1: "Roy Disney", correct: true },
            { a2: "Walt Disney", correct: false },
            { a3: "Julie Andrews", correct: false },
            { a4: "Michael Eisner", correct: false }]
    },
    {
        question: "What animal is found on Mary Poppin's umbrella?",
        answers: [
            { a1: "Parrot", correct: true },
            { a2: "Cat", correct: false },
            { a3: "Goat", correct: false },
            { a4: "Frog", correct: false }]
    },
    {
        question: "Who wakes Sleeping Beauty with a kiss?",
        answers: [
            { a1: "Prince Andrew", correct: false },
            { a2: "Prince Philip", correct: true },
            { a3: "Prince Naveen", correct: false },
            { a4: "Prince Charming", correct: false }]
    },
    {
        question: "'Let it Go' was made famous by what Disney movie?",
        answers: [
            { a1: "Frozen", correct: true },
            { a2: "101 Dalmatians", correct: false },
            { a3: "Cinderella", correct: false },
            { a4: "Toy Story", correct: false }]
    },
    {
        question: "In 'The Lion King', what is Simba's mother's name?",
        answers: [
            { a1: "Nala", correct: false },
            { a2: "Sarafina", correct: false },
            { a3: "Zazu", correct: false },
            { a4: "Sarabi", correct: true }]
    },
    {
        question: "How long was Genie from 'Aladdin' stuck in the lamp?",
        answers: [
            { a1: "20,000 years", correct: false },
            { a2: "15,000 years", correct: false },
            { a3: "10,000 years", correct: true },
            { a4: "1,000 years", correct: false }]
    },
    {
        question: "What causes Pinocchio's nose to grow?",
        answers: [
            { a1: "Laughing", correct: false },
            { a2: "Coughing", correct: false },
            { a3: "Lying", correct: true },
            { a4: "Falling", correct: false }]
    },
    {
        question: "Which Disney movie features the song 'Two Worlds'?",
        answers: [
            { a1: "The Little Mermaid", correct: false },
            { a2: "The Princess and the Frog", correct: false },
            { a3: "The Aristocats", correct: false },
            { a4: "Tarzan", correct: true }]
    }
];

$("#start").on("click", function () {
    $("#question").text(questions[0].question);
    $("#a1").text(questions[0].answers[0].a1);
    $("#a2").text(questions[0].answers[1].a2);
    $("#a3").text(questions[0].answers[2].a3);
    $("#a4").text(questions[0].answers[3].a4);
    $("#start").hide();
    $("#remaining").show();
    $("#question").show();
    $(".answer").show();
});