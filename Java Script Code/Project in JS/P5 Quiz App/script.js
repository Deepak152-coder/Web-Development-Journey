document.addEventListener("DOMContentLoaded", () => {
  // Ensure JS runs after page loads

  // ==== GETTING ALL HTML ELEMENTS ====
  const QuizContainer = document.getElementById("quiz-container");
  const QuestionContainer = document.getElementById("question-container");
  const QuestionText = document.getElementById("question-text");
  const ChoicesList = document.getElementById("choices-list");
  const NextBtn = document.getElementById("next-btn");
  const ResultContainer = document.getElementById("result-container");
  const Score = document.getElementById("score");
  const RestartBtn = document.getElementById("restart-btn");
  const StartBtn = document.getElementById("start-btn");

  // ==== QUESTIONS ARRAY ====
  const Questionarr = [
    {
      question: "What is the Capital of France ?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the red planet ?",
      choices: ["Mars", "Venus", "Jupitor", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hemlet' ?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0; // Track which question user is on
  let score = 0; // Track correct answers

  StartBtn.addEventListener("click", startQuiz); // Start button event

  // === FUNCTION: START QUIZ ===
  function startQuiz() {
    StartBtn.classList.add("hidden"); // Hide start button
    ResultContainer.classList.add("hidden"); // Hide result if restarting
    QuestionContainer.classList.remove("hidden"); // Show questions area
    showQuestion(); // Load first question
  }

  // === FUNCTION: DISPLAY QUESTION + OPTIONS ===
  function showQuestion() {
    NextBtn.classList.add("hidden"); // Hide next until answer selected
    QuestionText.textContent = Questionarr[currentQuestionIndex].question; // Show question text
    ChoicesList.innerHTML = ""; // Clear old choices

    // Loop through choices and create buttons/list
    Questionarr[currentQuestionIndex].choices.forEach((i) => {
      const li = document.createElement("li");
      li.textContent = i;
      li.addEventListener("click", () => SelectAnswer(i)); // When clicked → check answer
      ChoicesList.appendChild(li); // Add option to UI
    });
  }

  // === FUNCTION: HANDLE ANSWER SELECTION ===
  function SelectAnswer(choice) {
    const correctAnswer = Questionarr[currentQuestionIndex].answer;

    if (choice === correctAnswer) {
      score++; // Increase score if answer correct
    }

    NextBtn.classList.remove("hidden"); // Show next question button
  }

  // === NEXT BUTTON CLICK EVENT ===
  NextBtn.addEventListener("click", () => {
    currentQuestionIndex++; // Move to next question
    if (currentQuestionIndex < Questionarr.length) {
      showQuestion(); // Load next one
    } else {
      ShowResult(); // If finished → show result
    }
  });

  // === FUNCTION: DISPLAY RESULT SCREEN ===
  function ShowResult() {
    QuestionContainer.classList.add("hidden"); // Hide questions
    ResultContainer.classList.remove("hidden"); // Show result
    Score.textContent = `${score} out of ${Questionarr.length}`; // Display score
  }

  // === RESTART BUTTON EVENT ===
  RestartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0; // Reset index
    score = 0; // Reset score
    ResultContainer.classList.add("hidden");
    startQuiz(); // Start again
  });
});
