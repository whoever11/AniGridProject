# AniGridProject

# Description 
This is a anime trivia game where the gameboard is set up with 9 boxes and each time the player selects a box After this action happens, a question will appear at the lower thrid of the screen and the player will submit a answer to the qustion, if the player answers correctly they complete that box but if they miss the question they will lose a point. They gain a point for every question they get right and get 4 points to win. 

# Game Logic For Player
The player will load in and see a grid of 9 boxes to answer and have to get to 4 points to win , the player will select a box, a question will appear and the
player must answer the question, if correct they get the box but if answered wrong they lose a point. Win Condition is either the player completes the grid to four points or lose. 
# psuedocoding  
The questions will be written out with the answers (if no  api yet for anime related quesitons work so will have to categorize and group the question and answers), using a click function so when the player clicks one of boxes on the grid
ex. function boxClicked(e) {
}
        if (playerAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
           }   // Correct answer, proceed with marking the box
//questions/answers/
let questions = [
{ 'question: question1', 'answer: answer1'}]


# Design
The Top area of the screen will have the name of the game to help style the header. 
then a 3x3 grid consits of 9 boxes for the player to pick a box for the question.
the question will then appear below the grid in a box to show the question and the answer submit area will be below that area.
at the bottom of the screen will be a restart button if the player would like to restart the game.


Resources 

#Video 
https://youtu.be/PBcqGxrr9g8?si=kmhFqkC39ZzM0RQ8. This is a quiz someone made
and this video showed me about the function how to name certain ones and kind of what goes behind my game. 

https://youtu.be/Vp8x8-reqZA?si=rD02AWcw4VD0rhLP. I just went through this video
looking the code of how the quiz was being made to help me see visually what some
of the requirements were going to be it happens more around minutes 45-55 and later 65-80 some times there.
#Website terms 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor. this is for help get random array from the questions and select one for the player and for to string() for the score. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length. just for the array for questions. 
https://www.geeksforgeeks.org/how-to-create-blinking-text-using-css/. tried to see if 
blinking text would work but it did not.
https://www.tutorialspoint.com/how-to-clear-the-form-after-submitting-in-javascript-without-using-reset. Help
me with resetting the game learning more on how restart works. 
https://www.javatpoint.com/javascript-reset. 
help some with seeing reset actions
looked back at some of the github resource we had when we did push commands, and functions as well. The class work we learned and information we were given was
great help in this project. 

#CSS
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow found this that 
helps with answer text for the game.
https://www.w3schools.com/cssref/css3_pr_mediaquery.php. good reference for media sizes 
https://www.shecodes.io/athena/72807-understanding-the-value-property-in-javascript#:~:text=in%201.91%20seconds-,.,of%20userInput%20%2C%20you%20can%20use%20. javascript information to help see value property.

