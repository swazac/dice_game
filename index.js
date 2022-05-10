var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);

var imagelocation1 = "images\\dice" + randomNumber1 + ".png";
var imagelocation2 = "images\\dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagelocation1);
document.querySelectorAll("img")[1].setAttribute("src", imagelocation2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "It is a draw!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins!"
} else {
  document.querySelector("h1").innerText = "Player 2 wins!"
}
