// From EJ
// kata20-taxicab.js
// 2022-06-11
// https://flex-web.compass.lighthouselabs.ca/activities/116
// ~30min / / was 300min expected

const blocksAway = function(directions) 
{
  let returnObject={};
  let newEast=0;
  let newNorth=0;
  let newDir = -1;  // this will be a new 'angle' of driving 0-270 - should stay as multiples of 90.

  for (let x=0; x<directions.length; x+=2)  // inc by 2 because directions are 'paired' - direction plus distance. 
  {
    if(newDir===0) 
    {
      if(directions[x]==='right') { newDir=90; newEast+=directions[x+1]; }
      if(directions[x]==='left') { newDir=270; newEast-=directions[x+1]; }
    }
    else if(newDir===90)
    {
      if(directions[x]==='right') { newDir=180; newNorth-=directions[x+1]; }
      if(directions[x]==='left') { newDir=0; newNorth+=directions[x+1]; }
    }
    else if(newDir===180)
    {
      if(directions[x]==='right') { newDir=270; newEast-=directions[x+1];}
      if(directions[x]==='left') { newDir=90; newEast+=directions[x+1];}
    }
    else if(newDir===270)
    {
      if(directions[x]==='right') { newDir=0; newNorth+=directions[x+1]; }
      if(directions[x]==='left') { newDir=180; newNorth-=direcitons[x+1] }
    }
    else if(newDir < 0) // default - so this will be what happens FIRST
    {
      if(directions[x]==='right') { newDir=90; newEast+=directions[x+1]; }
      if(directions[x]==='left') { newDir=0; newNorth+=directions[x+1]; }
    }
    // console.log('EASTING: '+newEast+' NORTHING:'+newNorth);  // DEBUG
  }

  returnObject.east=newEast;
  returnObject.north=newNorth;

  return returnObject;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


/*
expected output:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/