var rand1 = Math.floor(Math.random()*6+1);
var rand2 = Math.floor(Math.random()*6+1);

rand1=rand1.toString();
rand2=rand2.toString();

var dice1="images/dice"+rand1+".png";
var dice2="images/dice"+rand2+".png";

document.querySelector('.img1').setAttribute("src",dice1);
document.querySelector('.img2').setAttribute("src",dice2);

if (dice1>dice2){
    document.querySelector("h1").innerHTML="Player 1 Won";

}

else if (dice1<dice2){
    document.querySelector("h1").innerHTML="Player 2 Won";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}