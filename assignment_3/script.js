
const questions = [
    { question: "1. Which is a programming language?",
      options: ["HTML", "JavaScript", "CSS", "All"],
      answer: "JavaScript" },

    { question: "2. Which keyword declares a variable?",
      options: ["let", "print", "show", "write"],
      answer: "let" },

    { question: "3. Which is an array method?",
      options: ["push()", "print()", "display()", "show()"],
      answer: "push()" },

    { question: "4. Which value is Boolean?",
      options: ["Hello", "10", "true", "null"],
      answer: "true" },

    { question: "5. Which symbol checks equality strictly?",
      options: ["=", "==", "===", "+"],
      answer: "===" },

    { question: "6. Which loop repeats code?",
      options: ["for", "if", "else", "switch"],
      answer: "for" },

    { question: "7. Which method selects an element by ID?",
      options: ["getElementById()", "push()", "alert()", "write()"],
      answer: "getElementById()" },

    { question: "8. Which event handles a button click?",
      options: ["click", "hover", "load", "change"],
      answer: "click" }
];

let index = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const next = document.getElementById("next");
const restart = document.getElementById("restart");

function showQuestion() {
    result.textContent = "";
    options.innerHTML = "";
    next.hidden = true;

    question.textContent = questions[index].question;

    questions[index].options.forEach(function (option) {
        const btn = document.createElement("button");
        btn.textContent = option;

        btn.onclick = function () {
            const buttons = options.querySelectorAll("button");

            buttons.forEach(function (b) {
                b.disabled = true;

                if (b.textContent === questions[index].answer) {
                    b.style.backgroundColor = "green";
                    b.style.color = "white";
                }
            });

            if (option === questions[index].answer) {
                score++;
                result.textContent = "Correct!";
            } else {
                btn.style.backgroundColor = "red";
                btn.style.color = "white";
                result.textContent =
                    "Wrong! Answer: " + questions[index].answer;
            }

            next.hidden = false;
        };

        options.appendChild(btn);
        options.appendChild(document.createElement("br"));
    });
}

next.onclick = function () {
    index++;

    if (index < questions.length) {
        showQuestion();
    } else {
        question.textContent = "Quiz Completed!";
        options.innerHTML = "";
        result.textContent = "You scored " + score + " out of 8";
        next.hidden = true;
        restart.hidden = false;
    }
};

restart.onclick = function () {
    index = 0;
    score = 0;
    restart.hidden = true;
    showQuestion();
};

showQuestion();
