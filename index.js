// Your code here
let dodger = document.getElementById("dodger");
let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0){
    dodger.style.left = `${left-2}px`;
  }
}

function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360){
    dodger.style.left = `${left+2}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
});