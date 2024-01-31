let questionsAndAnswers = [
    { question: "My Hero Academia powers are called?", answer: "Quirks" },
    { question: "Naruto's village is called?", answer: "Hidden Leaf Village" },
    { question: "Who is known as the Strongest Character in Jujutsu Kaisen?", answer: "Gojo" },
    { question: "What is the power system in HunterxHunter called?", answer: "Nen" },
    { question: "Who defeated Cell in dragonballz?", answer: "Gohan" },
    { question: "who gave luffy his straw hat?", answer: "Shanks" },
    { question: "What is the highest grossing anime film of all time?", answer:"Demon Slayer Mugen Train" },
    { question: "who gave luffy his straw hat?", answer: "Shanks" },
    { question: "Anime with a death notebook?", answer: "Deathnote" },
    { question: "What wall did the Titans attack first?", answer: "Wall Maria" },
    { question: "In Jujutsu Kaisen, how many fingers did Yuji eat by the end of the first season?", answer: "three" },
    { question: "In Jujutsu Kaisen, what is Yujis type in girls?", answer: "Jennifer Lawrence" },
    { question: "In Death Note, who was Misa Misas Shinigami?", answer: "Rem" },
    { question: "What was Christas real name in Attack on Titan?", answer: "Historia" },
    { question: "What does ODM gear stand for?", answer: "Omni Directional Mobility" },
    { question: "What was Gons Hunter Exam number?", answer: "405" },
    { question: "What is Zenitsus first form called?", answer: "Thunderclap" },
    { question: "who gave luffy his straw hat?", answer: "Shanks" },
    { question: "Who is the protagonist of 'Naruto'?", answer: "Naruto" },
    { question: "What is the name of the main character in 'One Piece'?", answer: "Luffy" },
    { question: "What is the name of the main character in 'My Hero Academia'?", answer: "Deku" },
    { question: "What is the name of the main character in 'Dragon Ball Z'?", answer: "Goku" },
    { question: "What is the name of the main character in 'Attack on Titan'?", answer: "Eren" },
    { question: "What is the name of the main character in 'Demon Slayer'?", answer: "Tanjiro" },
    { question: "What is the name of the main character in 'Hunter x Hunter'?", answer: "Gon" },
    { question: "What is the name of the main character in 'Death Note'?", answer: "Light" },
    { question: "What is the name of the main character in 'Fullmetal Alchemist'?", answer: "Edward" },
    { question: "What is the name of the main character in 'Cowboy Bebop'?", answer: "Spike" },
    { question: "What is the name of the main character in 'Sailor Moon'?", answer: "Usagi" },
    { question: "What is the name of the main character in 'Sword Art Online'?", answer: "Kirito" },
    { question: "What is the name of the main character in 'Neon Genesis Evangelion'?", answer: "Shinji" },
    { question: "What is the name of the main character in 'Bleach'?", answer: "Ichigo" },
    { question: "What is the name of the main character in 'Fairy Tail'?", answer: "Natsu" },
    { question: "What is the name of the main character in 'JoJo's Bizarre Adventure'?", answer: "Jotaro" },
    { question: "What is the name of the main character in 'Yu Yu Hakusho'?", answer: "Yusuke" },
    { question: "What is the name of the main character in 'Inuyasha'?", answer: "Inuyasha" },

]
//Above is the array of questions and answers

//below is function to display random question
function displayRandomQuestion() {
   if (questionsAndAnswers.length === 0) {
       return
    }
    const randomQuestion = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)]//random question from array of questions and answers
    questionObj = randomQuestion // Assign randomQuestion to questionObj
    document.querySelector("#question").textContent = questionObj.question
}

// below is box to click to display random question
document.querySelectorAll(`.box`).forEach(box => {
    box.addEventListener('click', displayRandomQuestion)
})

// below is the function to check if answer is correct and submit and the score
let score = 0
document.getElementById('submit').addEventListener('click', function() {
    let userAnswer = document.getElementById('answer').value
    if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
        alert('Correct!') // alerts if answer is correct
        score += 1
        if (score >= 4) {
            alert('You win!')// alerts if score is 4 or more
        }
    } else {
        alert('Incorrect!')// alerts if answer is incorrect
        if (score > 0) {
            score -= 1 // Decrease score but not below 0
        }
    }
    document.getElementById('answer').value = '' // clears the answer box after submitting
    document.getElementById('score').innerText = score.toString() // converts score to string
})

// restart button and everything on the screen
document.getElementById(`restart`).addEventListener(`click`, function() {
    document.getElementById(`answer`).value = ``//clears the answer box
    document.getElementById(`question`).innerText = ``//clears the question box
    document.getElementById(`score`).innerText = ``//clears the score box
})
