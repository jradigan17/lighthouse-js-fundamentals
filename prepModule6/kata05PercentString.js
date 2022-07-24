const urlEncode = function(text) {
  // Error Checking
  if(!text){
    return "Error no input value";
  }
  
  // Put your solution here
  let url = "";
  for(let i = 0; i < text.length; i++) {
    if((i === 0 && text[i] === " ") || (i === text.length - 1 && text[i] === " ")) {
      continue;
    }
    if(text[i] === " ") {
      url += "%20";
    } else {
      url += text[i];
    };
  };
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode());