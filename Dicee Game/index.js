//For playing game.
function play() {
  // window.location.reload();
  playgame();
}
//for stop the game
function Stop() {
  document.querySelector("h1").textContent = "Play Game";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
// The random generation for image 1.
function playgame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomimage = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomimage);

  // The random generation for image 2.

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomimage = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomimage);

  //Declaring the winner.
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw";
  }
}
