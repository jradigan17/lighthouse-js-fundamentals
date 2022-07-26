let prompt = require("prompt-sync")();

// code below (replace this example)
let randomNumber = 0;
let count = 1;
let repeat = false;
let list = [];

const generateNumber = function(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  let answer = prompt("Guess a number between " + min + " and " + max + ": ");
  while(answer != randomNumber) {
    for(let i of list){
      if(answer == i){
        repeat  = true;
        break;
      } else {
        repeat = false;
      };
    };
    if(isNaN(answer)) {
      answer = prompt("Not a Number! Try Again: ");
    } else if(repeat) {
      answer = prompt("Already Guessed. Guess Again: ");
    } else {
    checkanswer(answer);
    answer = prompt("Guess Again: ");
    count += 1;

    };
  };

  let tries = count > 1 ? "tries" : "try";
  console.log("Congrats - You Got It!");
  return console.log("It took you " + count + " " + tries + ".");
};
  
const checkanswer = function(answer) {
  if(answer < randomNumber) {
    console.log("Too Low!");
    list.push(answer);
  } else if (answer > randomNumber) {
    console.log("Too High");
    list.push(answer);
  };
};

(generateNumber(0, 10));
