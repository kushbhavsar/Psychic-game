var movie = ["Minion","Ironman","Titanic","TheHurtLocker","BraveHeart","TheDeparted"];
var randm = Math.floor(Math.random() * movie.length);
var randomWord = movie[randm];
var dash = [];
var rightGuess = [];
var wrongGuess = [];
var win = 0;
console.log(randomWord);
//var uGuess = document.getElementById("words");
    var userGuess = () =>{
    for(var i = 0 ; i < randomWord.length ; i++ ) {
       dash[i] = "_"; 
    }
}
console.log(userGuess());

    document.getElementById(" ")
//document.addEventListener("keypress", (event) => {
  //   var guess = String.fromCharCode(event.keyCode);
        console.log(guess);
//  if(randomWord.indexOf(userGuess) > -1)
//  {
//      rightGuess.push(userGuess);
//      dash[randomWord.indexOf(userGuess)] = userGuess;
        
//          if(dash.join(" ") === randomWord)
//          {
//              win++;
//          }
//  }
//  else{
//      wrongGuess.push(userGuess);
//  }
});

