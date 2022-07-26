const blocksAway = function(directions) {
  // Put your solution here
  let x = 0;
  let y = 0;
  let point = "+y";
  if(directions[0] === "left"){
    point = "+x";
  };

  for(let i = 0; i < directions.length; i += 2) {
    if(directions[i] === "right" && point === "+y") {
      x += directions[i+1];
      point = "+x";
    } else if(directions[i] === "right" && point == "-y") {
      x -= directions[i+1];
      point = "-x"; 
    } else if(directions[i] === "right" && point == "+x") {
      y -= directions[i+1];
      point = "-y"; 
    } else if(directions[i] === "right" && point == "-x") {
      y += directions[i+1];
      point = "+y"
    };

    if(directions[i] === "left" && point === "+y") {
      x -= directions[i+1];
      point = "-x";
    } else if(directions[i] === "left" && point == "-y") {
      x += directions[i+1];
      point = "+x"; 
    } else if(directions[i] === "left" && point == "+x") {
      y += directions[i+1];
      point = "+y"; 
    } else if(directions[i] === "left" && point == "-x") {
      y -= directions[i+1];
      point = "-y"
    };
  };
  let final = {};
  final.east = x;
  final.north = y;
  return final;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));