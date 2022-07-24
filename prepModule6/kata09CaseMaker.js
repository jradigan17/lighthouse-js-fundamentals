const camelCase = function(input) {
  // Error Checking
  if(!input){
    return "Error - missing input value";
  }
  
  // Your code here
  let output = "";
  for(let i = 0; i < input.length; i++) {
    if(input[i] === " ") {
      output += input[i+1].toUpperCase();
      i += 1;
    } else {
      output += input[i].toLowerCase();
    };
  };
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase(""));
console.log(camelCase("THIS IS WHAT HAPPENS WHEN CAPS LOCK IS STUCK ON"));