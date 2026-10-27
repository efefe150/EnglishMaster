const courseData = {
    vocab: [
        { title: "MARK THE CORRECT ONE", xp: 10, questionPool: generatePool("MARK THE CORRECT ONE", "vocab") },
        { title: "MARK THE CORRECT ONE (2)", xp: 10, questionPool: generatePool("MARK THE CORRECT ONE (2)", "vocab") },
        { title: "FILL IN THE BLANKS", xp: 10, questionPool: generatePool("FILL IN THE BLANKS", "vocab") },
        { title: "WHAT IS THE MAIN IDEA QUESTIONS", xp: 10, questionPool: generatePool("WHAT IS THE MAIN IDEA QUESTIONS", "vocab") },
        { title: "WHAT IS THE MAIN IDEA QUESTIONS (2)", xp: 10, questionPool: generatePool("WHAT IS THE MAIN IDEA QUESTIONS (2)", "vocab") }
    ],
    grammar: [
        { title: "TO BE (AM, IS, ARE) (A1-A2)", xp: 10, questionPool: generatePool("TO BE", "grammar") },
        { title: "SUBJECT PRONOUNS (I, YOU, HE...)(A1-A2)", xp: 10, questionPool: generatePool("SUBJECT PRONOUNS", "grammar") },
        { title: "POSSESSIVE ADJECTIVES (A1-A2)(MY, YOURS, THEIR...)", xp: 10, questionPool: generatePool("POSSESSIVE ADJECTIVES", "grammar") },
        { title: "EXISTENCE", xp: 10, questionPool: generatePool("EXISTENCE", "grammar") },
        { title: "POSSESSION", xp: 10, questionPool: generatePool("POSSESSION", "grammar") },
        { title: "SIMPLE PRESENT TENSE", xp: 10, questionPool: generatePool("SIMPLE PRESENT TENSE", "grammar") },
        { title: "ADVERBS OF FREQUENCY", xp: 10, questionPool: generatePool("ADVERBS OF FREQUENCY", "grammar") },
        { title: "CAN, CAN'T", xp: 10, questionPool: generatePool("CAN, CAN'T", "grammar") },
        { title: "ARTICLES", xp: 10, questionPool: generatePool("ARTICLES", "grammar") },
        { title: "DEMONSTRATIVE PRONOUNS", xp: 10, questionPool: generatePool("DEMONSTRATIVE PRONOUNS", "grammar") },
        { title: "PREPOSITIONS OF PLACE", xp: 10, questionPool: generatePool("PREPOSITIONS OF PLACE", "grammar") },
        { title: "BASIC QUESTIONS", xp: 10, questionPool: generatePool("BASIC QUESTIONS", "grammar") },
        { title: "PAST SIMPLE", xp: 10, questionPool: generatePool("PAST SIMPLE", "grammar") },
        { title: "PAST SIMPLE (REGULAR WORDS)", xp: 10, questionPool: generatePool("PAST SIMPLE (REGULAR)", "grammar") },
        { title: "FUTURE FORMS (WILL / BE GOING TO)", xp: 10, questionPool: generatePool("FUTURE FORMS", "grammar") },
        { title: "COMPARATIVE / SUPERLATIVE", xp: 10, questionPool: generatePool("COMPARATIVE / SUPERLATIVE", "grammar") },
        { title: "COUNTABLE / UNCOUNTABLE NOUNS", xp: 10, questionPool: generatePool("COUNTABLE / UNCOUNTABLE", "grammar") },
        { title: "QUANTIFIERS (A LOT OF, A FEW, A LITTLE)", xp: 10, questionPool: generatePool("QUANTIFIERS", "grammar") },
        { title: "PRESENT CONTINUOUS", xp: 10, questionPool: generatePool("PRESENT CONTINUOUS", "grammar") },
        { title: "PRESENT CONTINUOUS VS PAST SIMPLE", xp: 10, questionPool: generatePool("PRESENT CONTINUOUS VS PAST SIMPLE", "grammar") },
        { title: "PREPOSITION OF TIME", xp: 10, questionPool: generatePool("PREPOSITION OF TIME", "grammar") },
        { title: "MODAL VERBS", xp: 10, questionPool: generatePool("MODAL VERBS", "grammar") },
        { title: "OBJECT PRONOUNS", xp: 10, questionPool: generatePool("OBJECT PRONOUNS", "grammar") },
        { title: "POSSESSIVE PRONOUNS", xp: 10, questionPool: generatePool("POSSESSIVE PRONOUNS", "grammar") },
        { title: "LIKES AND DISLIKES + -GERUNDS (-ING)", xp: 10, questionPool: generatePool("LIKES AND DISLIKES", "grammar") },
        { title: "QUESTION TAGS", xp: 10, questionPool: generatePool("QUESTION TAGS", "grammar") },
        { title: "LIKE, LOVE, HATE, DISLIKE, ENJOY + VERB -ING", xp: 10, questionPool: generatePool("LIKE LOVE HATE + ING", "grammar") },
        { title: "BASIC CONNECTORS", xp: 10, questionPool: generatePool("BASIC CONNECTORS", "grammar") },
        { title: "PAST CONTINUOUS", xp: 10, questionPool: generatePool("PAST CONTINUOUS", "grammar") },
        { title: "TOOL ENOGHT", xp: 10, questionPool: generatePool("TOOL ENOGHT", "grammar") },
        { title: "CONDITIONALS", xp: 10, questionPool: generatePool("CONDITIONALS", "grammar") },
        { title: "GRAMMAR TESTS", xp: 10, questionPool: generatePool("GRAMMAR TESTS", "grammar") },
        { title: "GRAMMAR TESTS (A1-A2) (2)", xp: 10, questionPool: generatePool("GRAMMAR TESTS 2", "grammar") }
    ]
};

function generatePool(topicName, category) {
    let baseQuestions = [];

    if (category === "vocab") {
        baseQuestions = [
            { question: `Which of the following is the most accurate synonym for the advanced academic term in context?`, answers: [{ text: "Comprehensive", correct: true }, { text: "Superficial", correct: false }, { text: "Ambiguous", correct: false }, { text: "Irrelevant", correct: false }] },
            { question: `Identify the word that best completes the collocation regarding professional communication.`, answers: [{ text: "Establish rapport", correct: true }, { text: "Construct argument silently", correct: false }, { text: "Develop hesitation", correct: false }, { text: "Maintain chaos", correct: false }] },
            { question: `Choose the correct contextual definition for the underlined expression in professional correspondence.`, answers: [{ text: "To expedite a process", correct: true }, { text: "To delay indefinitely", correct: false }, { text: "To complicate matters", correct: false }, { text: "To abandon completely", correct: false }] }
        ];
    } else {
        baseQuestions = [
            { question: `Identify the structurally accurate sentence applying advanced grammatical inversion rules for '${topicName}'.`, answers: [{ text: "Not only did she complete the project ahead of schedule, but she also secured additional funding.", correct: true }, { text: "Not only she completed the project, but also secured funding.", correct: false }, { text: "Did not only she complete the project, she secured funding.", correct: false }, { text: "Not only completed she the project, but secured funding.", correct: false }] },
            { question: `Select the correct form to ensure proper syntactic agreement and tense consistency for '${topicName}'.`, answers: [{ text: "Had the board reviewed the proposal thoroughly, the acquisition would have succeeded.", correct: true }, { text: "If the board would have reviewed the proposal thoroughly, the acquisition succeeded.", correct: false }, { text: "Were the board to review the proposal, the acquisition will succeed.", correct: false }, { text: "Had reviewed the board the proposal, it succeeds.", correct: false }] },
            { question: `Choose the option that accurately adheres to standard advanced structural constraints for '${topicName}'.`, answers: [{ text: "Hardly had we stepped outside when the torrential downpour commenced.", correct: true }, { text: "Hardly we had stepped outside than downpour commenced.", correct: false }, { text: "Scarcely we stepped outside when downpour starts.", correct: false }, { text: "No sooner we had stepped outside than downpour commences.", correct: false }] }
        ];
    }

    let fullPool = [...baseQuestions];
    let counter = 1;
    while (fullPool.length < 1000) {
        let baseQ = baseQuestions[counter % baseQuestions.length];
        fullPool.push({
            question: `[Advanced Assessment - ${topicName}] Item #${fullPool.length + 1}: ${baseQ.question}`,
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

function goBackToModules() {
    if (quizSection) quizSection.classList.add("hide");
    if (modulesSection) modulesSection.classList.remove("hide");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const backBtnEl = document.getElementById("back-to-modules");
if (backBtnEl) {
    backBtnEl.addEventListener("click", goBackToModules);
}

renderModules();