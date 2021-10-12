// Modules to be installed
// > npm install prompt-sync
const prompt = require('prompt-sync')();

//Defining the hangman word and transorming into Array
const word = "hello";
//Transforming the word into an Array
let wordarray = word.split("");
let mistakes = 0;
let counter = wordarray.length;

//Defining the hangman word and populating with _ at the beginning
let hangman = [];
for (let i = 0; i < wordarray.length; i++) {
    hangman.push(" _");
}
//The array that is holding all the typed letters
let guessedletters = [];


//Starting the Game
console.log('Please type "Quit" to exit the game or "Start" to start Hangman Game');

const start_input = prompt("> ");

//If user wants to Quit or Start the game
if (start_input.toLowerCase() === "quit"){
    console.log("Exiting the game");
    return;

} else if (start_input.toLowerCase() === "start"){
    console.log("Starting the game");
    console.log("Please guess the word that has " + word.length + " characters")
    console.log(hangman.join(""));

    //Checking if there are still letters to be guessed
    while (mistakes < 4){

        let word_input = prompt("Type a letter: ");
        
        //Checking if the user input has only 1 character
        if (word_input.length = 1){
            //Checking if the user has already typed that character
            if ( guessedletters.includes(word_input) ){
                console.log("You have already typed " + word_input);
                console.log(guessedletters);
            } else {
                guessedletters.push(word_input);
                //If not then start the logic
                if (wordarray.includes(word_input)){
                    for (let i = 0; i < wordarray.length; i++) {
                        //Checking if the Hangman word has the character that user has typed
                        if (word_input == wordarray[i]){
                            hangman[i] = word_input;
                            counter--;
                        }  
                    }
                } else {
                    mistakes++;
                    console.log("mistakes: " + mistakes)
                }
                
            }
        console.log(hangman.join(""));    
        } else {
            console.log("Please type only one character");
        }
            
        
    }
}