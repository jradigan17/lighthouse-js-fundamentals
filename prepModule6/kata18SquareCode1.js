// From EJ
// kata18-squarecode.js
// 2022-06-09
// https://flex-web.compass.lighthouselabs.ca/activities/114
// est 240 mins by prep course - actual 20 or less.
//


// usage: supply string message text - we need to 'square it' & strip spaces - put into 2D array
// read the colums to give the output text L to R, top to bottom
const squareCode = function(message) 
{
  let theCode='';
  // strip all spaces
  // count chars
  // square root num chars to create how many each row will have -- round up so we don't have an 'over hang' char
  // count every square root num chars and show it w a space (no need for array)
  message = message.replace(/\s/g, '');  // strip spaces
  // console.log('|'+message+'|'); // DEBUG
  
  let numChars=message.length;
  let numWordChar=(Math.ceil(Math.sqrt(numChars)));

  for (let y=0; y < numWordChar; y++)
  {
   for (let x=y; x < numChars; x+=numWordChar)  // this loop assembles a  'word' - we need an outer loop to the end of numChars
    {
      theCode += message[x];
    }
    theCode += ' ';
  }
  // console.log(message);
  return theCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
/*
expected output:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/