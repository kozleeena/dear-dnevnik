let words = [];
let currentUserId = null;

async function loadWords() {
    const { data: authData, error: authError } =
        await supabaseClient.auth.getUser();

    if (authError || !authData?.user) {
        window.location.replace("index.html");
        return;
    }

    currentUserId = authData.user.id;

    const { data, error } = await supabaseClient
        .from("vocabulary_words")
        .select("id, word, translation, example")
        .eq("user_id", currentUserId)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error loading vocabulary:", error);
        wordList.textContent = "Could not load your words.";
        return;
    }

    words = data || [];

    displayWords(words);
}
const wordList = document.getElementById("word-list");
const searchInput = document.getElementById("word-search");
const addWordButton = document.getElementById("add-word-btn");
const addWordForm = document.getElementById("add-word-form");
const wordForm = document.getElementById("word-form");

function displayWords(list) {
    wordList.innerHTML = "";

    list.forEach((item) => {
        const card = document.createElement("div");
        card.className = "word-card";

        const title = document.createElement("h3");
        title.textContent = item.word;

        const translation = document.createElement("p");
        translation.textContent = item.translation;
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        >
        <path d="M3 6h18"/>
        <path d="M8 6V4h8v2"/>
        <path d="M19 6l-1 14H6L5 6"/>
        <path d="M10 11v5"/>
        <path d="M14 11v5"/>
        </svg>
        `;
        deleteButton.title = "Delete word";
        deleteButton.setAttribute("aria-label", "Delete word");
        deleteButton.className = "delete-word-btn";
        deleteButton.addEventListener("click", async () => {
            if (!currentUserId) return;
            deleteButton.disabled = true;
            const { error } = await supabaseClient
            .from("vocabulary_words")
            .delete()
            .eq("id", item.id)
            .eq("user_id", currentUserId);
            if (error) {
                console.error("Error deleting word:", error);
                alert("Could not delete the word.");
                deleteButton.disabled = false;
                return;
            }
            words = words.filter(word => word.id !== item.id);
            searchInput.dispatchEvent(new Event("input"));
        });

        const example = document.createElement("p");
        example.className = "word-example";
        example.textContent = item.example;

        card.append(title, translation, example, deleteButton);
        wordList.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredWords = words.filter((item) =>
        item.word.toLowerCase().includes(query) ||
        item.translation.toLowerCase().includes(query)
    );

    displayWords(filteredWords);
});

addWordButton.addEventListener("click", () => {
    addWordForm.classList.toggle("hidden");
});

wordForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!currentUserId) return;

    const newWord = {
        user_id: currentUserId,
        word: document.getElementById("new-word").value.trim(),
        translation: document.getElementById("new-translation").value.trim(),
        example: document.getElementById("new-example").value.trim()
    };

    if (!newWord.word || !newWord.translation) {
        return;
    }

    const submitButton = wordForm.querySelector(
        'button[type="submit"]'
    );

    submitButton.disabled = true;

    try {
        const { data, error } = await supabaseClient
            .from("vocabulary_words")
            .insert(newWord)
            .select("id, word, translation, example")
            .single();

        if (error) {
            throw error;
        }

        words.unshift(data);

        searchInput.value = "";
        displayWords(words);

        wordForm.reset();
        addWordForm.classList.add("hidden");

    } catch (error) {
        console.error("Error saving word:", error);
        alert("Could not save the word.");

    } finally {
        submitButton.disabled = false;
    }
});
/* Flashcards */

const flashcardsButton = document.getElementById("flashcards-btn");
const testButton = document.getElementById("test-btn");

const flashcardsSection = document.getElementById("flashcards-section");
const testSection = document.getElementById("test-section");

const flashcard = document.getElementById("flashcard");
const flashcardText = document.getElementById("flashcard-text");
const cardCounter = document.getElementById("card-counter");

const previousCard = document.getElementById("previous-card");
const nextCard = document.getElementById("next-card");

let currentCard = 0;
let isFlipped = false;

function displayCard() {
    if (words.length === 0) {
        flashcardText.textContent = "No words yet!";
        cardCounter.textContent = "";
        return;
    }

    const word = words[currentCard];

    flashcardText.textContent = isFlipped
        ? word.translation
        : word.word;

    cardCounter.textContent =
        `Card ${currentCard + 1} of ${words.length}`;
}

flashcardsButton.addEventListener("click", () => {
    flashcardsSection.classList.remove("hidden");
    testSection.classList.add("hidden");

    currentCard = 0;
    isFlipped = false;

    displayCard();
});

flashcard.addEventListener("click", () => {
    if (words.length === 0) return;

    isFlipped = !isFlipped;
    displayCard();
});

nextCard.addEventListener("click", () => {
    if (words.length === 0) return;

    currentCard = (currentCard + 1) % words.length;
    isFlipped = false;

    displayCard();
});

previousCard.addEventListener("click", () => {
    if (words.length === 0) return;

    currentCard = (currentCard - 1 + words.length) % words.length;
    isFlipped = false;

    displayCard();
});
/* Vocabulary Test */

const testProgress = document.getElementById("test-progress");
const testQuestion = document.getElementById("test-question");
const testOptions = document.getElementById("test-options");
const testFeedback = document.getElementById("test-feedback");
const nextQuestion = document.getElementById("next-question");

let testWords = [];
let currentQuestion = 0;
let score = 0;

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startTest() {
    flashcardsSection.classList.add("hidden");
    testSection.classList.remove("hidden");

    testWords = shuffle(words);
    currentQuestion = 0;
    score = 0;

    if (words.length < 4) {
        testQuestion.textContent = "Add at least 4 words to start!";
        testProgress.textContent = "";
        testOptions.innerHTML = "";
        testFeedback.textContent = "";
        nextQuestion.classList.add("hidden");
        return;
    }

    displayQuestion();
}

function displayQuestion() {
    const currentWord = testWords[currentQuestion];

    testProgress.textContent =
        `Question ${currentQuestion + 1} of ${testWords.length}`;

    testQuestion.textContent =
        `What does "${currentWord.word}" mean?`;

    testOptions.innerHTML = "";
    testFeedback.textContent = "";
    nextQuestion.classList.add("hidden");

    const incorrectAnswers = shuffle(
        words.filter(item => item.word !== currentWord.word)
    ).slice(0, 3);

    const options = shuffle([
        currentWord,
        ...incorrectAnswers
    ]);

    options.forEach(option => {
        const button = document.createElement("button");

        button.className = "test-option";
        button.textContent = option.translation;

        button.addEventListener("click", () => {
            checkAnswer(button, option, currentWord);
        });

        testOptions.appendChild(button);
    });
}

function checkAnswer(button, selected, correct) {
    const buttons = testOptions.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correct.translation) {
            btn.classList.add("correct");
        }
    });

    if (selected === correct) {
        score++;
        testFeedback.textContent = "Correct!";
    } else {
        button.classList.add("incorrect");
        testFeedback.textContent =
            `Correct answer: ${correct.translation}`;
    }

    nextQuestion.classList.remove("hidden");
}

testButton.addEventListener("click", startTest);

nextQuestion.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < testWords.length) {
        displayQuestion();
    } else {
        testProgress.textContent = "Test completed!";
        testQuestion.textContent =
            `Your score: ${score} / ${testWords.length}`;

        testOptions.innerHTML = "";
        testFeedback.textContent = "";
        nextQuestion.classList.add("hidden");
    }
});
loadWords();