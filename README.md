# AniGridProject

# Description 
This is a anime trivia game where the gameboard is set up with 9 boxes and each time the player selects a box a card will flip over with the name of the anime or the character of the anime. After this action happens, a question will appear at the lower thrid of the screen and the player will submit a answer to the qustion, if the player answers correctly they complete that box but if they miss the question they will lose a life. A player will have three lives and has to answer all 9 box questions to win the challenge. 

# Game Logic For Player
The player will load in and see a grid of 9 boxes to answer and 3 lives, the player will select a box, a question will appear and the
player must answer the question, if correct they get the box but if answered wrong they lose a life. Win Condition is either the player completes the grid or loses all their lives. 

# psuedocoding  
The questions will be written out with the answers (not good api yet for anime related quesitons so will have to categorize and group the question and answers), using a click function so when the player clicks one of boxes on the grid.
ex. function boxClicked(e) {
    const id = e.target.id

ex. to check if correct  // Check if the answer is correct
        if (playerAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
            // Correct answer, proceed with marking the box
