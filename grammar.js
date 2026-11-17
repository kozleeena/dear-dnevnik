(() => {
    "use strict";
/* Grammar Gym elements */

const levelSelect = document.getElementById("grammar-level");
const topicSelect = document.getElementById("grammar-topic");
const availableQuestions = document.getElementById("available-questions");

const settingsSection = document.getElementById("grammar-settings");
const workoutSection = document.getElementById("grammar-workout");
const resultsSection = document.getElementById("grammar-results");

const startButton = document.getElementById("start-grammar");
const nextButton = document.getElementById("next-grammar-question");
const restartButton = document.getElementById("restart-grammar");

const questionTitle = document.getElementById("grammar-question");
const questionTopic = document.getElementById("question-topic");
const optionsContainer = document.getElementById("grammar-options");
const feedback = document.getElementById("grammar-feedback");

const progressText = document.getElementById("grammar-progress");
const progressFill = document.getElementById("progress-fill");
const scoreText = document.getElementById("grammar-score");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

let workoutQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

/* Filters */

function getQuestions() {
    const level = levelSelect.value;
    const topic = topicSelect.value;

    return grammarQuestions.filter(question => {
        const matchesLevel =
            level === "all" || question.level === level;

        const matchesTopic =
            topic === "all" || question.topic === topic;

        return matchesLevel && matchesTopic;
    });
}

function updateTopics() {
    const level = levelSelect.value;

    const relevantQuestions = grammarQuestions.filter(question =>
        level === "all" || question.level === level
    );

    const topics = [
        ...new Set(relevantQuestions.map(question => question.topic))
    ];

    topicSelect.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Random Mix";
    topicSelect.appendChild(allOption);

    topics.sort().forEach(topic => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });

    updateQuestionCount();
}

function updateQuestionCount() {
    const count = getQuestions().length;

    availableQuestions.textContent =
        `${count} questions available`;

    startButton.disabled = count === 0;
}

levelSelect.addEventListener("change", updateTopics);
topicSelect.addEventListener("change", updateQuestionCount);

/* Start workout */

function shuffleQuestions(questions) {
    const shuffled = [...questions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startWorkout() {
    const available = getQuestions();

    if (available.length === 0) return;

    workoutQuestions = shuffleQuestions(available).slice(0, 10);

    currentQuestionIndex = 0;
    score = 0;

    settingsSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    workoutSection.classList.remove("hidden");

    displayQuestion();
}

startButton.addEventListener("click", startWorkout);

/* Display question */

function displayQuestion() {
    answered = false;

    const question = workoutQuestions[currentQuestionIndex];

    progressText.textContent =
        `Question ${currentQuestionIndex + 1} of ${workoutQuestions.length}`;

    scoreText.textContent = `Score: ${score}`;

    progressFill.style.width =
        `${(currentQuestionIndex / workoutQuestions.length) * 100}%`;

    questionTopic.textContent =
        `${question.level} · ${question.topic}`;

    questionTitle.textContent = question.question;

    optionsContainer.innerHTML = "";
    feedback.classList.add("hidden");
    nextButton.classList.add("hidden");

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "grammar-option";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        optionsContainer.appendChild(button);
    });
}

/* Check answer */

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const question = workoutQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }
    });

    feedback.textContent =
        `${isCorrect ? "Correct!" : "Not quite!"} ${question.explanation}`;

    feedback.classList.remove("hidden");
    nextButton.classList.remove("hidden");

    scoreText.textContent = `Score: ${score}`;
}

/* Next question */

nextButton.addEventListener("click", () => {
    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < workoutQuestions.length) {
        displayQuestion();
    } else {
        finishWorkout();
    }
});

/* Results */

function finishWorkout() {
    workoutSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    const total = workoutQuestions.length;
    const percentage = Math.round((score / total) * 100);

    finalScore.textContent = `${score} / ${total} (${percentage}%)`;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect workout!";
    } else if (percentage >= 70) {
        resultMessage.textContent = "Great job! Keep practicing.";
    } else {
        resultMessage.textContent =
            "Every mistake is a chance to learn. Try again!";
    }
}

/* Restart */

restartButton.addEventListener("click", () => {
    resultsSection.classList.add("hidden");
    workoutSection.classList.add("hidden");
    settingsSection.classList.remove("hidden");

    updateQuestionCount();
});

/* Initialize */

updateTopics();
})();