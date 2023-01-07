function rollDice(){
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  
  var ImagePath1 = "images/dice" + randomNumber1 + ".png";
  var ImagePath2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector("img.dice1").setAttribute("src", ImagePath1);

  document.querySelector("img.dice2").setAttribute("src", ImagePath2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector(".hugeHeading").textContent = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".hugeHeading").innerHTML =
      "<span>🚩</span>Player 1 Wins!<span class='Hide'>🚩</span>";
  } else {
    document.querySelector(".hugeHeading").innerHTML =
      "<span class='Hide'>🚩</span>Player 2 Wins!<span>🚩</span>";
  }
  
}
document.querySelector(".custom").getAttribute("onclick");
