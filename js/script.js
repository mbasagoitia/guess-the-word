const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessSpan = document.querySelector("span");
const message = document.querySelector(".message");
const playAgainBtn = document.querySelector(".play-again");

const word = "Magnolia";


const addPlaceholders = function (word) {
    const letterArray = word.split("");
    for (let i = 0; i < letterArray.length; i++) {
        letterArray[i] = "●";
    }
    const hiddenWord = letterArray.join("");
    wordInProgress.innerText = hiddenWord;
}

addPlaceholders(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    let userInput = guessBox.value; 
    console.log(userInput);
    guessBox.value = "";
})

