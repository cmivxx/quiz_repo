/*----- constants -----*/
const startButton = document.getElementById('startButton')
const questionContentElement = document.getElementById('question-content')  
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerButtons')
const gameMusic = new Audio("../Audio/Undertaletrack2.mp3") 
const gameScoreElement = document.getElementById('gameScore')
const startGameContentElement = document.getElementById('startGame-Content')
const wows = new Audio("../Audio/wows.mp3")
/*----- app's state (variables) -----*/

let shuffledQuestions, currentQuestionIndex
var gameScore = 0;



/*----- cached element references -----*/




/*----- event listeners -----*/
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})




/*----- functions -----*/
function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function startGame() {
    startButton.classList.add('hide')
    startGameContentElement.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContentElement.classList.remove('hide')
    gameMusic.volume = .2;
    gameMusic.play()
    gameMusic.loop;
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
    if (correct) gameScore++;
    if (correct) {wows.volume =.5;
    wows.play();}
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
    gameScoreElement.innerText = gameScore; 
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
      question: 'What does NES stand for??',
      answers: [
          {text: 'Nashville Electric Service', correct: false},
          {text: 'National Evaluation Series', correct: false},
          {text: 'Nuverra Environmental Solutions', correct: false},
          {text: 'Nintendo Entertainment System', correct: true},
          
      ]
    },
    {
        question: 'Legend of Zelda protagonist?',
        answers: [
            {text: 'Zelda', correct: false},
            {text: 'Link', correct: true,
            {text: 'Kirby', correct: false},
            {text: 'Jill Valentine', correct: false},
            
        ]  
    
      },




]