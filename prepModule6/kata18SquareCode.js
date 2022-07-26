const squareCode = function(message) {
  // Put your solution here
  let noSpace = "";
  for(let i of message) {
    if(i !== " ") {
      noSpace += i;
    };
  };
  let square = Math.ceil(Math.sqrt(noSpace.length));
  let squareCode = "";
  for(let i = 0; i < noSpace.length; i++) {
    if(i > 0 && i % square === 0) {
      squareCode += "\n";
    };
    squareCode += noSpace[i];
  };
  let code = "";
  for(let j = 0; j < square; j++) {
    for(let i = j; i < squareCode.length; i+= square + 1) {
      code += squareCode[i];
    };
    code += " ";
  };
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));