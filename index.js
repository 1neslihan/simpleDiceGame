var randomNumber1=Math.floor(Math.random()*6+1);

if(randomNumber1===1){
    document.querySelector("img.dice1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2){
    document.querySelector("img.dice1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelector("img.dice1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4){
    document.querySelector("img.dice1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1===5){
    document.querySelector("img.dice1").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector("img.dice1").setAttribute("src","images/dice6.png");
}

var randomNumber2=Math.floor(Math.random()*6+1);
if(randomNumber2===1){
    document.querySelector("img.dice2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2){
    document.querySelector("img.dice2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3){
    document.querySelector("img.dice2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4){
    document.querySelector("img.dice2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5){
    document.querySelector("img.dice2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector("img.dice2").setAttribute("src","images/dice6.png");
}

if(randomNumber1===randomNumber2){
    document.querySelector(".hugeHeading").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".hugeHeading").innerHTML="<span>🚩</span>Player 1 Wins!<span class='Hide'>🚩</span>";
}
else{
    document.querySelector(".hugeHeading").innerHTML="<span class='Hide'>🚩</span>Player 2 Wins!<span>🚩</span>";   
}
