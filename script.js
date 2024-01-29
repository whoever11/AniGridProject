let restart = document.querySelector("#restartBtn")
let questionsAndAnswers = [
    { question: "Who is the Main Character in One Piece?", answer: "Luffy" },,
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
    { question: "In Jujutsu Kaisen, what is Yuji’s type in girls?", answer: "Jennifer Lawrence" },
    { question: "In Death Note, who was Misa Misa’s Shinigami?", answer: "Rem" },
    { question: "What was Christa’s real name in Attack on Titan?", answer: "Historia" },
    { question: "What does ODM gear stand for?", answer: "Omni Directional Mobility" },
    { question: "What was Gon’s Hunter Exam number?", answer: "405" },
    { question: "What is Zenitsu’s first form called?", answer: "Thunderclap" },
    { question: "who gave luffy his straw hat?", answer: "Shanks" },
]
function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length)
    const randomQuestion = questionsAndAnswers[randomIndex]
    document.querySelector('.question-text').innerText = randomQuestion.question
}
