let homeScoreEl = document.getElementById("scoreHome");

let awayScoreEl = document.getElementById("scoreAway");

let counthome = 0;
let countaway = 0;

function onePointHome() {
  counthome = counthome + 1;
  homeScoreEl.textContent = counthome;
}
function twoPointHome() {
  counthome = counthome + 2;
  homeScoreEl.textContent = counthome;
}
function threePointHome() {
  counthome = counthome + 3;
  homeScoreEl.textContent = counthome;
}
// ------------------------------------------------
function onePointAway() {
  countaway = countaway + 1;
  awayScoreEl.textContent = countaway;
}
function twoPointAway() {
  countaway = countaway + 2;
  awayScoreEl.textContent = countaway;
}
function threePointAway() {
  countaway = countaway + 3;
  awayScoreEl.textContent = countaway;
}
// ---------------------------------------------------

function newGame() {
  homeScoreEl.textContent = 0;
  awayScoreEl.textContent = 0;
}

// -----------------------------------------------------


