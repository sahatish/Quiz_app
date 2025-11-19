// Quiz Questions
const questions = [
  { q: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: 1 },
  { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: 0 },
  { q: "HTML stands for?", options: [
      "HighText Machine Language", "Hyper Text Markup Language", 
      "Hyper Tool Multi Language", "None"
    ], answer: 1 },
  { q: "CSS is used for?", options: ["Structure", "Styling", "Database", "Logic"], answer: 1 },
  { q: "JS stands for?", options: ["JavaScript", "JavaSystem", "JumboScript", "None"], answer: 0 },
  { q: "Which one is NOT a programming language?", options: ["Python","Java","HTML","C++"], answer: 2 },
  { q: "Which tag is used for images?", options: ["<img>","<image>","<picture>","<src>"], answer: 0 },
  { q: "Who developed JavaScript?", options: ["Google","Meta","Netscape","Apple"], answer: 2 },
  { q: "Which CSS property sets text color?", options: ["font-color","color","text-style","text-color"], answer: 1 },
  { q: "Largest planet?", options: ["Earth","Mars","Jupiter","Venus"], answer: 2 }
];

let index = 0,
    score = 0,
    timer,
    timeLeft = 10,
    timeSpent = [];

// Load Question
function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;

  let optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  questions[index].options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(i, btn);
    optDiv.appendChild(btn);
  });

  // Button visibility
  if (index === questions.length - 1) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "inline-block";
  } else {
    document.getElementById("nextBtn").style.display = "inline-block";
    document.getElementById("finishBtn").style.display = "none";
  }

  resetTimer();
}

// Select Answer
function selectAnswer(selectedIndex, selectedElement) {
  clearInterval(timer);

  document.querySelectorAll(".option").forEach(el => {
    el.style.pointerEvents = "none";
    el.classList.remove("selected");
  });

  selectedElement.classList.add("selected");

  if (selectedIndex === questions[index].answer) score++;
}

// Timer Logic
function resetTimer() {
  timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;

  let spent = 0;

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    spent++;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft === 0) {
      timeSpent.push(spent);
      nextQuestion();
    }
  }, 1000);
}

// NEXT button logic
function nextQuestion() {
  clearInterval(timer);
  timeSpent.push(10 - timeLeft);

  index++;
  loadQuestion();
}

document.getElementById("nextBtn").onclick = nextQuestion;

// FINISH button logic
document.getElementById("finishBtn").onclick = showResult;

// Final Result Page
function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").innerText =
    `Score: ${score}/${questions.length}`;

  let detailText = "";
  timeSpent.forEach((t, i) => {
    detailText += `Q${i + 1}: Time Spent = ${t}s<br>`;
  });

  document.getElementById("details").innerHTML = detailText;
}

// Start Quiz
loadQuestion();
