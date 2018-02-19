
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                "P","Q","R","S","T","U","V","W","X","Y","Z"];

var win = 0;
var loss = 0;
var guessRemain = 10;
var letterGuess = [];


document.onkeyup = function(event){
    var guessed = String.fromCharCode(event.keyCode).toUpperCase();
    var randm = Math.floor(Math.random() * letters.length);
    var randomWord = letters[randm];
    letterGuess.push(guessed);

    if(guessed === randomWord)
    {
        win++;
        guessRemain = 10;
        letterGuess.length = 0;

    } else if(guessRemain === 0)
    {
        loss++;
        guessRemain = 10;
        letterGuess.length = 0;

    } else if(guessed !== randomWord)
    {
        guessRemain--;

    }

    var html= 
    "<h4>Press any Key to Get Started</h4>" +
    "<p> Win : " + win + "</p>" +
    "<p> Loses : " + loss + "</p>" +
    "<p> Number of Guess Remain : " + guessRemain + "</p>" +
    "<p> Letters already Guessed : " + letterGuess + "</p>";

    document.querySelector("#psychic").innerHTML = html;
}
