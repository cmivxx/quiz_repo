/*----- constants -----*/
const startButton = document.getElementById('startButton')
const questionContentElement = document.getElementById('question-content')  
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerButtons')
/*----- app's state (variables) -----*/

let shuffledQuestions, currentQuestionIndex



/*----- cached element references -----*/




/*----- event listeners -----*/
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


/*----- functions -----*/
function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}




function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContentElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}




function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
} 



function setStatusClass(element, correct) {
    clearStatusClass(element); 
     if (correct) { element.classList.add('correct')}
     else {
        element.classList.add('wrong')}
    }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



/*----- Question references -----*/
const questions = [
    {
      question: 'The only known monotremes in the animal kingdom are the echidna and which other creature?',
      answers: [
          {text: 'Platypus', correct: true},
          {text: 'Saola', correct: false},
          {text: 'Hirola', correct: false},
          {text: 'Baiji', correct: false},

      ]  
    }

    {
        question: 'Fissures, vents and plugs are all associated with which geological feature?',
        answers: [
            {text: 'Earthquakes', correct: false},
            {text: 'Volcanos', correct: true},
            {text: 'Maar', correct: false},
            {text: 'Caldera', correct: false},
  
        ]  
      }



]