//Conditional examples "raining"
const raining = true;
const temperature = 12;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if(temperature >= 15) {
  console.log("Short sleeves are fine.");
} else {
  console.log("Short sleeves won't cut it!");
}

console.log("Now you're ready to go outside!");


//Next Exercise
const isCitizen = true;
const age = 26

if(isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Nested For Loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

//Laughing "haha" example
let z = "";
 
function laugh(num){
    for(let x = 1; x <= num; x++){
        z += "ha";
    }
    return z + "!"
}
console.log(laugh(7));