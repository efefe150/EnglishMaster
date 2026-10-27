const courseData = {
    vocab: [
        { title: "MARK THE CORRECT ONE", xp: 10, questionPool: generatePool("MARK THE CORRECT ONE") },
        { title: "MARK THE CORRECT ONE (2)", xp: 10, questionPool: generatePool("MARK THE CORRECT ONE (2)") },
        { title: "FILL IN THE BLANKS", xp: 10, questionPool: generatePool("FILL IN THE BLANKS") },
        { title: "WHAT IS THE MAIN IDEA QUESTIONS", xp: 10, questionPool: generatePool("WHAT IS THE MAIN IDEA QUESTIONS") },
        { title: "WHAT IS THE MAIN IDEA QUESTIONS (2)", xp: 10, questionPool: generatePool("WHAT IS THE MAIN IDEA QUESTIONS (2)") }
    ],
    grammar: [
        { title: "TO BE (AM, IS, ARE) (A1-A2)", xp: 10, questionPool: generatePool("TO BE") },
        { title: "SUBJECT PRONOUNS (I, YOU, HE...)(A1-A2)", xp: 10, questionPool: generatePool("SUBJECT PRONOUNS") },
        { title: "POSSESSIVE ADJECTIVES (A1-A2)(MY, YOURS, THEIR...)", xp: 10, questionPool: generatePool("POSSESSIVE ADJECTIVES") },
        { title: "EXISTENCE", xp: 10, questionPool: generatePool("EXISTENCE") },
        { title: "POSSESSION", xp: 10, questionPool: generatePool("POSSESSION") },
        { title: "SIMPLE PRESENT TENSE", xp: 10, questionPool: generatePool("SIMPLE PRESENT TENSE") },
        { title: "ADVERBS OF FREQUENCY", xp: 10, questionPool: generatePool("ADVERBS OF FREQUENCY") },
        { title: "CAN, CAN'T", xp: 10, questionPool: generatePool("CAN, CAN'T") },
        { title: "ARTICLES", xp: 10, questionPool: generatePool("ARTICLES") },
        { title: "DEMONSTRATIVE PRONOUNS", xp: 10, questionPool: generatePool("DEMONSTRATIVE PRONOUNS") },
        { title: "PREPOSITIONS OF PLACE", xp: 10, questionPool: generatePool("PREPOSITIONS OF PLACE") },
        { title: "BASIC QUESTIONS", xp: 10, questionPool: generatePool("BASIC QUESTIONS") },
        { title: "PAST SIMPLE", xp: 10, questionPool: generatePool("PAST SIMPLE") },
        { title: "PAST SIMPLE (REGULAR WORDS)", xp: 10, questionPool: generatePool("PAST SIMPLE (REGULAR)") },
        { title: "FUTURE FORMS (WILL / BE GOING TO)", xp: 10, questionPool: generatePool("FUTURE FORMS") },
        { title: "COMPARATIVE / SUPERLATIVE", xp: 10, questionPool: generatePool("COMPARATIVE / SUPERLATIVE") },
        { title: "COUNTABLE / UNCOUNTABLE NOUNS", xp: 10, questionPool: generatePool("COUNTABLE / UNCOUNTABLE") },
        { title: "QUANTIFIERS (A LOT OF, A FEW, A LITTLE)", xp: 10, questionPool: generatePool("QUANTIFIERS") },
        { title: "PRESENT CONTINUOUS", xp: 10, questionPool: generatePool("PRESENT CONTINUOUS") },
        { title: "PRESENT CONTINUOUS VS PAST SIMPLE", xp: 10, questionPool: generatePool("PRESENT CONTINUOUS VS PAST SIMPLE") },
        { title: "PREPOSITION OF TIME", xp: 10, questionPool: generatePool("PREPOSITION OF TIME") },
        { title: "MODAL VERBS", xp: 10, questionPool: generatePool("MODAL VERBS") },
        { title: "OBJECT PRONOUNS", xp: 10, questionPool: generatePool("OBJECT PRONOUNS") },
        { title: "POSSESSIVE PRONOUNS", xp: 10, questionPool: generatePool("POSSESSIVE PRONOUNS") },
        { title: "LIKES AND DISLIKES + -GERUNDS (-ING)", xp: 10, questionPool: generatePool("LIKES AND DISLIKES") },
        { title: "QUESTION TAGS", xp: 10, questionPool: generatePool("QUESTION TAGS") },
        { title: "LIKE, LOVE, HATE, DISLIKE, ENJOY + VERB -ING", xp: 10, questionPool: generatePool("LIKE LOVE HATE + ING") },
        { title: "BASIC CONNECTORS", xp: 10, questionPool: generatePool("BASIC CONNECTORS") },
        { title: "PAST CONTINUOUS", xp: 10, questionPool: generatePool("PAST CONTINUOUS") },
        { title: "TOOL ENOGHT", xp: 10, questionPool: generatePool("TOOL ENOGHT") },
        { title: "CONDITIONALS", xp: 10, questionPool: generatePool("CONDITIONALS") },
        { title: "GRAMMAR TESTS", xp: 10, questionPool: generatePool("GRAMMAR TESTS") },
        { title: "GRAMMAR TESTS (A1-A2) (2)", xp: 10, questionPool: generatePool("GRAMMAR TESTS 2") }
    ]
};

function generatePool(topicName) {
    let baseQuestions = [
        { question: `[${topicName}] Choose the correct option.`, answers: [{ text: "Correct Answer", correct: true }, { text: "Wrong Option 1", correct: false }, { text: "Wrong Option 2", correct: false }, { text: "Wrong Option 3", correct: false }] },
        { question: `[${topicName}] Which of the following is correct according to the rule?`, answers: [{ text: "Correct Answer", correct: true }, { text: "Distractor A", correct: false }, { text: "Distractor B", correct: false }, { text: "Distractor C", correct: false }] },
        { question: `[${topicName}] Fill in the blank with the appropriate choice.`, answers: [{ text: "Correct Response", correct: true }, { text: "Alternative X", correct: false }, { text: "Alternative Y", correct: false }, { text: "Alternative Z", correct: false }] }
    ];

    let fullPool = [...baseQuestions];
    let counter = 1;
    while (fullPool.length < 1000) {
        let baseQ = baseQuestions[counter % baseQuestions.length];
        fullPool.push({
            question: `(${topicName}) Question ${fullPool.length + 1}: ${baseQ.question.split('. ')[1] || baseQ.question}`,
            answers: baseQ.answers
        });
        counter++;
    }
    return fullPool;
}

const modulesSection = document.getElementById("modules-section");
const moduleList = document.getElementById("module-list");
const quizSection = document.getElementById("quiz-section");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionProgress = document.getElementById("question-progress");
const scoreTracker = document.getElementById("score-tracker");
const quizDiv = document.getElementById("quiz");
const resultContainer = document.getElementById("result-container");
const finalScoreSpan = document.getElementById("final-score");
const totalQuestionsSpan = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");
const moduleTitleBadge = document.getElementById("module-title-badge");
const xpEarnedSpan = document.getElementById("xp-earned");

let currentCategory = 'vocab';
let currentModuleIndex = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let earnedXP = 0;

function switchTab(category) {
    currentCategory = category;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderModules();
}

function renderModules() {
    if (!moduleList) return;
    moduleList.innerHTML = "";
    const modules = courseData[currentCategory];

    modules.forEach((mod, index) => {
        const card = document.createElement("div");
        card.classList.add("module-card");
        card.innerHTML = `
            <div class="module-info">
                <h3>${mod.title}</h3>
                <span class="module-xp">+${mod.xp} XP (1,000 Question Pool)</span>
            </div>
            <button class="card-btn">Start Lesson <i class="fa-solid fa-arrow-right"></i></button>
        `;
        card.addEventListener("click", () => startModule(index));
        moduleList.appendChild(card);
    });
}

function startModule(index) {
    currentModuleIndex = index;
    const selectedModule = courseData[currentCategory][index];
    earnedXP = selectedModule.xp;

    let shuffledPool = [...selectedModule.questionPool].sort(() => 0.5 - Math.random());
    currentQuestions = shuffledPool.slice(0, 30); 

    if (modulesSection) modulesSection.classList.add("hide");
    if (quizSection) quizSection.classList.remove("hide");
    if (moduleTitleBadge) moduleTitleBadge.innerText = selectedModule.title;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if (resultContainer) resultContainer.classList.add("hide");
    if (quizDiv) quizDiv.classList.remove("hide");
    if (scoreTracker) scoreTracker.innerText = `Score: ${score} / 30 (0 XP)`;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    if (questionProgress) questionProgress.innerText = `Question ${questionNo} / 30`;
    if (questionText) questionText.innerText = currentQuestion.question;

    let shuffledAnswers = [...currentQuestion.answers].sort(() => 0.5 - Math.random());

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn-option");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        if (answerButtons) answerButtons.appendChild(button);
    });
}

function resetState() {
    if (nextButton) nextButton.classList.add("hide");
    while (answerButtons && answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
        if (scoreTracker) scoreTracker.innerText = `Score: ${score} / 30 (${earnedXP} XP)`;
    } else {
        selectedButton.classList.add("wrong");
    }

    if (answerButtons) {
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
    }

    if (currentQuestions.length > currentQuestionIndex + 1) {
        if (nextButton) nextButton.classList.remove("hide");
    } else {
        setTimeout(showScore, 1000);
    }
}

function showScore() {
    if (quizDiv) quizDiv.classList.add("hide");
    if (resultContainer) resultContainer.classList.remove("hide");
    if (finalScoreSpan) finalScoreSpan.innerText = score;
    if (totalQuestionsSpan) totalQuestionsSpan.innerText = "30";
    if (xpEarnedSpan) xpEarnedSpan.innerText = `Earned XP: +${earnedXP} XP`;
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        showQuestion();
    });
}

if (restartButton) {
    restartButton.addEventListener("click", () => {
        startModule(currentModuleIndex);
    });
}

const backBtnEl = document.getElementById("back-to-modules");
if (backBtnEl) {
    backBtnEl.addEventListener("click", () => {
        if (quizSection) quizSection.classList.add("hide");
        if (modulesSection) modulesSection.classList.remove("hide");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

renderModules();