const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O"
    },
    {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        category: "Science",
        question: "What part of the cell contains genetic material?",
        choices: ["Nucleus", "Cytoplasm", "Cell membrane"],
        answer: "Nucleus"
    },
    {
        category: "Science",
        question: "What force pulls objects toward the Earth?",
        choices: ["Magnetism", "Gravity", "Friction"],
        answer: "Gravity"
    },
    {
        category: "Science",
        question: "What is the closest star to Earth?",
        choices: ["Alpha Centauri", "The Sun", "Sirius"],
        answer: "The Sun"
    }
];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is ${question.answer}.`;
    }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(randomQuestion);
console.log(computerChoice);
console.log(getResults(randomQuestion, computerChoice));
