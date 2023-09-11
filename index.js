  //Gallery
  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";
  });
  nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
  });
  backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
  });

//Quiz
  const quizData = [
    {
        question: "Who founded the Company?",
        a: "John Anderson",
        b: "Bruce Anderson",
        c: "David Anderson",
        d: "Stevan Anderson",
        correct: "c",
    },
    {
        question: "When was the company founded?",
        a: "2010",
        b: "1970",
        c: "1990",
        d: "1960",
        correct: "b",
    },
    {
        question: "Which continent inspires the design?",
        a: "Asia",
        b: "Europe",
        c: "America",
        d: "Africa",
        correct: "c",
    },
    {
        question: "In which city is the company headquarters?",
        a: "Cologne",
        b: "Berlin",
        c: "Hamburg",
        d: "Freiburg",
        correct: "d",
    },
  ];

  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')

  let currentQuiz = 0
  let score = 0

  loadQuiz()

  function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
 
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
        
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button submit onclick = "location.reload()">Reload</button>` 
        }
    }
})