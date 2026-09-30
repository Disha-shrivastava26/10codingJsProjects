// quiz app
// question
// options
// object arrays
const quizdata = [
  {
    question: "The age for vote?",
    a: 12,
    b: 15,
    c: 18,
    d: 20,
    correct: "c",
  },
  {
    question: "The lake city of india ?",
    a: "bhopal",
    b: "indore",
    c: "jaipur",
    d: "raipur",
    correct: "a",
  },
  {
    question: "most powerful programming lang ?",
    a: "javascript",
    b: "python",
    c: "c++",
    d: "go",
    correct: "a",
  },
  {
    question: "current year ?",
    a: "2026",
    b: "2025",
    c: "1998",
    d: "2017",
    correct: "a",
  },
];

// array ke har ekk object per jao or use per kuch kaam or next pai until array is end
const quizresult = document.getElementById("quizresult");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");
const answers = document.querySelectorAll(".answers");

let currentQuestion = 0;
let score = 0;

const loadquiz = function () {
  const currQuestiondata = quizdata[currentQuestion];

  question.innerHTML = currQuestiondata.question;
  a_text.innerHTML = currQuestiondata.a;
  b_text.innerHTML = currQuestiondata.b;
  c_text.innerHTML = currQuestiondata.c;
  d_text.innerHTML = currQuestiondata.d;
};
loadquiz();

//so for every submit we jump or next question call again this funtion with new question

function getSelected() {
  answerCheck = undefined;

  answers.forEach((answer) => {
    if (answer.checked) {
      answerCheck = answer.id;
    }
  });

  return answerCheck;
}

function deselect() {
  answers.forEach((answer) => {
    if (answer.checked) {
      answer.checked = false;
    }
  });
}
submitBtn.addEventListener("click", function () {
  const ans = getSelected();

  console.log(ans);

  if (ans) {
    if (ans === quizdata[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizdata.length) {
      loadquiz();
      deselect();
    } else {
      //alert(`you have finished the Quiz ! final score is ${score}`);
      quizresult.innerHTML = `<h2>You have finished ${score}/${quizdata.length}

      
      <button onclick=location.reload()>Reload</button></h2>`;
    }
  }
});

//1 to check whether any answer is selected or not
// 2 to unselect the answer once selected for that particular answer
// 3 to store the selected answer
//4.to check whether the selected answer is true or false
