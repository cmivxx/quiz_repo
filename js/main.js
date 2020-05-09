/*----- constants -----*/
const startButton = document.getElementById('startButton')
const questionContentElement = document.getElementById('question-content')  
const shuffledQuestions, currentQuestionIndex


/*----- app's state (variables) -----*/





/*----- cached element references -----*/




/*----- event listeners -----*/
startButton.addEventListener('click', startGame)



/*----- functions -----*/
function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContentElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

} 



/*----- Question references -----*/
const question = [
    {
      question: 'The only known monotremes in the animal kingdom are the echidna and which other creature?'
      answers: [
          {text: 'Platypus', correct: true},
          {text: 'Saola', correct: false},
          {text: 'Hirola', correct: false},
          {text: 'Baiji', correct: false},

      ]  
    }
]