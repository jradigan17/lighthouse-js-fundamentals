const numberOfVowels = function(data) {
  // Error Checking
  if(!data || !data[0]) {
    return "Error - Missing input data";
  }
  
  // Put your solution here
  let sum = 0;
  for(let i = 0; i < data.length; i++) {
    if(data[i] === "a" || data [i] === "e" || data [i] === "i" || data [i] === "o" || data [i] === "u") {
      sum += 1;
    }; 
  };
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Additional Checks
console.log(numberOfVowels(""));
console.log(numberOfVowels("bcd"));
console.log(numberOfVowels(5));
console.log(numberOfVowels());
console.log(numberOfVowels("a"));