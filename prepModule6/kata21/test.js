let num = Math.floor(Math.random());
//console.log(num);

const randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomNumber(0, 100));