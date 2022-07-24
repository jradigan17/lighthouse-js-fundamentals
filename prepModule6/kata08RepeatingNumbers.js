const repeatNumbers = function(data) {
  // Error Checking
  if(!data || !data[0]) {
    return "Error - missing input data";
  };

  // Put your solution here
  let output = "";

  for(let i = 0; i < data.length; i++) {
    let string = "";
    let tmp = data[i];
    for(let j = 0; j < tmp[1]; j++) {
      string += tmp[0];
    };

    if(i < data.length && i > 0) {
      output += ", " + string;
    } else {
      output += string;
    };
  };
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers());
console.log(repeatNumbers([]));