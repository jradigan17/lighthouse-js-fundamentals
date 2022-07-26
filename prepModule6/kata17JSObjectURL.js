const urlDecode = function(text) {
  // Put your solution here
  let output = {};
  let key = "";
  let result = "";

  for(let i = 0; i < text.length; i++) {
    if(text[i] === "&") {
      output[key] = result;
      result = "";
      key = "";
    } else if (text[i] === "=") {
        key = result;
        result = "";
    } else if(text[i] === "%" && text[i+1] === "2" && text[i+2] === "0") {
        result += " ";
        i += 2;
    } else {
      result += text[i];
    };
  };
  output[key] = result;
  return output;
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain&bootcamp=Lighthouse%20Labs"));