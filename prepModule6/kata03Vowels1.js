// From EJ
// kata03-vowelcount.js
// 2022-06-05
// https://flex-web.compass.lighthouselabs.ca/activities/99
//

const numberOfVowels = function(data) 
{
  // learning about reg.expressions here
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // .match and switches --   i = ignore case, g = count whole group/string
  var match = data.match(/[aeiou]/gi);

  // .match returns null if 0, so let's make it zero count instead
  if (!match)
  {
    return(0);
  }
  return match.length;  
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aaeiou"));
console.log(numberOfVowels("zzhgt")); //extra test to see what hapens if NO vowels found