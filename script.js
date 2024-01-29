let questionsAndAnswers = [
    { question: "Who is the Main Character in One Piece?", answer: "Luffy" },
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
]
//Above is the array of questions and answers

//below is function to display random question
function displayRandomQuestion() {
   if (questionsAndAnswers.length === 0) {
       return
    }
    const randomQuestion = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)]
    const questionObj = questionsAndAnswers.splice(randomQuestion, 1)[0] // this will make it so questions don't repeat
    document.querySelector("#question").textContent = questionObj.question
}
// below is box to click to display random question
document.querySelectorAll(`box`) .forEach(box => {
    box.addEventListener('click', displayRandomQuestion)
    } )