var randomNumber1=Math.floor(Math.random()*6+1);
console.log(randomNumber1);
if(randomNumber1===1){
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice1.png");
}
else if(randomNumber1===2){
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice3.png");
}
else if(randomNumber1===4){
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice4.png");
}
else if(randomNumber1===5){
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice5.png");
}
else{
    document.querySelector("img.zar1").setAttribute("src","/Zar/images/dice6.png");
}

var randomNumber2=Math.floor(Math.random()*6+1);
if(randomNumber2===1){
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice1.png");
}
else if(randomNumber2===2){
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice2.png");
}
else if(randomNumber2===3){
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice3.png");
}
else if(randomNumber2===4){
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice4.png");
}
else if(randomNumber2===5){
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice5.png");
}
else{
    document.querySelector("img.zar2").setAttribute("src","/Zar/images/dice6.png");
}

if(randomNumber1===randomNumber2){
    document.querySelector(".hugeHeading").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".hugeHeading").textContent="🚩 Player 1 Wins!";
}
else{
    document.querySelector(".hugeHeading").textContent="Player 2 Wins! 🚩";   
}
