console.log('Please type "Quit" to exit the game or "Start" to start Hangman Game');

// Modules to be installed
// > npm install prompt-sync

const prompt = require('prompt-sync')();
const user_input = prompt("> ");

if (user_input.toLowerCase() === "quit"){
    console.log("Exiting the game");
    return;
} else if (user_input.toLowerCase() === "start"){
    console.log("Starting the game")
}