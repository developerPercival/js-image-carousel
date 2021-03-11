//Get img container
//Get left btn
//Get right btn
//Get all imgs
//Create state variable with a value of 0

const imgs = document.querySelector("#imgs");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const img = document.querySelectorAll("#imgs img");

let index = 0;

//Change Image function
const changeImg = function () {
  //Evaluate
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  //Apply style
  imgs.style.transform = `translateX(${-index * 500}px)`;
};

//Run carousel continously
const runCarousel = function () {
  //increment
  index++;

  //change image
  changeImg();
};

//Continously run the carousel (setinterval return a id num)
let interval = setInterval(runCarousel, 2000);

//Reset interval function
const resetInterval = function () {
  //Clear setInterval
  clearInterval(interval);

  //Reset interval variable
  interval = setInterval(runCarousel, 2000);
};

//Event handler
leftBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //Increment
  index--;

  //Change Image
  changeImg();

  //Reset interval
  resetInterval();
});

rightBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //Decrement
  index++;

  //Change Image
  changeImg();

  //Reset interval
  resetInterval();
});
