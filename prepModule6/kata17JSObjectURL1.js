// From EJ
// kata17-urldecode.js
// 2022.06.10
// https://flex-web.compass.lighthouselabs.ca/activities/113
// 45mins est - 30mins actual
//


const urlDecode = function(text) 
{
  var outputObject={};

  var pairArray=text.split('&'); // split on & for each pair
  console.log(pairArray);
  for(x=0; x<pairArray.length; x++)
  {
    var contentArray=pairArray[x].split('='); // split on name and data pairs  contentArray0 is the name
    console.log(contentArray);
    let dataArray=contentArray[1].split('%20'); // split on data value spaces (%20)
    let dataString="";

    for(y=0; y<dataArray.length; y++) // rebuild the data string with real spaces
    {
      dataString = dataString + dataArray[y]+" ";
    }
    dataString = dataString.trim(); // deal with any extra trailing space that was added
    outputObject[contentArray[0]] = dataString; // push details to the object
  }

  return outputObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain&bootcamp=Lighthouse%20Labs"));

/* 
expected output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/