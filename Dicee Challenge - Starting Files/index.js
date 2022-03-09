var player1=Math.floor(6*(Math.random()))+1;
var player2=Math.floor(6*(Math.random()))+1;

console.log(player1+"   "+player2)
if(player1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(player1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(player1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(player1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(player1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
if(player2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(player2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(player2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(player2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(player2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


if(player1>player2){
    document.querySelector("h1").textContent="player 1 wins";
}
else if(player2>player1){
    document.querySelector("h1").textContent="player2 wins";
}
else{
    document.querySelector("h1").textContent="It's a tie";
}