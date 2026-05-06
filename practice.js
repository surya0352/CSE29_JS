let gameNum=28;
let guessNum=prompt("guess the game Number");
while(gameNum!=guessNum)
{
  guessNum=prompt("you guessed wrong number guess again");
}
console.log("congratulation")



let fullName=prompt("enter your full name");
let username="@"+fullName + fullName.length;
document.write(username);