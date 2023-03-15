# Stratix-Solutions
Guess What The Ultimate Single-Player Word Guessing Adventure

“**Guess What**” is a single-player word-guessing game with a score system. The game randomly takes a word stored in one of many arrays on the server-side file. Each array will be based around one of the several categories that the player was prompted to choose from at the start of the game. Each round has a limited number of guesses for a randomly given word, and correct answers earn points. The game will check if the generated word matches the user's input. This can be done by comparing each letter of the generated word with the letters inputted by the user. The game's interface includes a Hints section and the Game Stats system allows players to see their game statistics for the duration of the session. 

**Functional requirements**:

Implement a word guess game with a user-friendly interface. Here are the functional features that we have included in the Game Design:

1.**User Name**: The user’s name will be stored in a database once it is entered to be later used for the in-game data.

2.**Theme**: The user will get to pick from a number of different word themes before the game starts (ex: sports, computers, cities, food, etc.). Once the user selects a theme, the back-end will choose from a specific array storing words that match said theme.

3.**Play**: After inputting the NAME and THEME selection (dropdown Lists), we can start playing by  submitting the User Name and User preferences. If no input or selection has been done the prompt will appear “Please enter a name or select theme to continue”.

4.**Rules**: A simple window that will pop up to show text that explains the rules of the game. 

5.**Game Stats**: The game can include a stats feature to track the points earned during the game. This feature can also record and display statistics when more than one game is played during a single session. 

6.**Settings**:  A setting window will pop up when we click the settings button. A user can configure the settings like dark or light background and toggle on/off the game audio.

7.**Attempts**: The game will display how many attempts the user has to guess the word. When the user makes an incorrect guess they will lose one attempt.

8.**Score**: The score will display on the top right of the screen during the entire game. The score will increment if the player makes a correct guess of letters.

9.**Qwerty Keyboard**: To make it easier for the player to input letters, we can include a Qwerty keyboard on the screen that they can use to select the letters. This feature can make the game more user-friendly, especially for players who may have difficulty typing on a traditional keyboard.

10.**Hints**: When the user clicks the “Hint” button, the game will reveal a letter about the word they are trying to guess, and an attempt for that round will be deducted. There will be a hint limit indicated above the button.

11.**Guess word Empty Boxes**: Initially, a row of empty boxes corresponding to the length of the randomly chosen word will appear in the middle of the screen. As the player correctly guesses each letter, the letters will be revealed in these boxes. 

12.**Incorrect Guessed Letter**: The game keeps track of every letter that the player has guessed for each round and displays them in a small box so the player can know which letters that were guessed but are not included in the hidden words.

13.**Game theme Animation**: The game can include different animation themes such as Crack the Code and Hacking the Computer to add to the player's experience.

14.**Responsive Design/Layout**: Ensuring that our site is optimised for different screen sizes and devices, including smartphones, desktop and tablets.

