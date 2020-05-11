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
const backgroundimg = document.getElementById('background')



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
    backgroundimg.src="../Assets/Quizshow.jpg"
    questionElement.innerText = question.question
    if (question.img){
        let tempimg=question.img
        tempimg.src=question.img
        //tempimg.width= 600;
       //tempimg.height= 600;
        backgroundimg.src=tempimg
    }
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
      img: false,
      answers: [
          {text: 'Nashville Electric Service', correct: false},
          {text: 'National Evaluation Series', correct: false},
          {text: 'Nuverra Environmental Solutions', correct: false},
          {text: 'Nintendo Entertainment System', correct: true},
          
      ]
    },
    {
        question: 'who is The Legend of Zelda protagonist?',
        img: false,
        answers: [
            {text: 'Zelda', correct: false},
            {text: 'Link', correct: true},
            {text: 'Kirby', correct: false},
            {text: 'Jill Valentine', correct: false},
            
        ]  
    
      },
      {
        question: 'What popular Nintendo game is also known as "Pocket Monsters"?',
        img: false,
        answers: [
            {text: 'Digimon', correct: false},
            {text: 'Yokai Watch', correct: false},
            {text: 'Monster Hunter Stories', correct: false},
            {text: 'Pokemon', correct: true},
            
        ]  
    
      },

      {
        question: 'What Game is famous for the line "Fatality"?',
        img: false,
        answers: [
            {text: 'Street Fighter', correct: false},
            {text: 'Tekken', correct: false},
            {text: 'Mortal Kombat', correct: true},
            {text: 'Soul Calibur', correct: false},
            
        ]  
    
      },

      {
        question: 'Konami game where you play as Simon Belmont?',
        img: false,
        answers: [
            {text: 'Castlevania', correct: true},
            {text: 'Contra', correct: false},
            {text: 'Journey to the Center of the Earth', correct: false},
            {text: 'Dragon Ball Z', correct: false},
            
        ]  
    
      },
      
      {
        question: 'Lara Croft is the Protagonist of what popular Playstation game?',
        img: false,
        answers: [
            {text: 'Silent Hill', correct: false},
            {text: 'Tomb Raider', correct: true},
            {text: 'Dark Souls', correct: false},
            {text: 'Mario Kart', correct: false},
            
        ]  
    
      },
      
      {
        question: 'Who is this famous bounty hunter?',
        img: '../Assets/Samus.png',
        answers: [
            {text: 'Zero Suit Samus', correct: false},
            {text: 'Daisy', correct: true},
            {text: 'Chung-Li', correct: false},
            {text: 'Morganna', correct: false},
            
        ]  
    
      },

      {
        question: 'Which of these is the name of this pokemon?',
        img: '../Assets/jigglypuff.png',
        answers: [
            {text: 'Gegar', correct: false},
            {text: 'Charizard', correct: false},
            {text: 'Ludicolo', correct: false},
            {text: 'Jigglypuff', correct: true},
        ]  
       },
]