// From EJ
// kata19-queenthreat.js
// 2022-06-07
// https://flex-web.compass.lighthouselabs.ca/activities/115
//

let whiteQueen = [0, 5];
let blackQueen = [2, 3];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);

console.log(queenThreat(generatedBoard));



//
//  generatedBoard(white queen location array, black queen location array)  (array as x,y)
//  INFO: board is 8x8 - 0's are empty spaces, 1 is the queen
//
function generateBoard(whiteQueen, blackQueen)
{
  let boardArray=[];
  
  for (let y=0; y < 8; y++) // y is outer loop - each row
  {
    let rowArray=[];  // each row content
    for (let x=0; x<8; x++) // x is the row content
    {
      rowArray.push(0); // let's build the board EMPTY to start with - we can populate later
    }
    boardArray.push(rowArray);  // why does NODE show this but 'wraps' at 4 in the X position??
  }

  boardArray[whiteQueen[0]][whiteQueen[1]] = 1;
  boardArray[blackQueen[0]][blackQueen[1]] = 1;
  return(boardArray);
}



//
// queenThreat(the board) - takes the board array and looks for x/y conflicts for queen movements
// return a true or false if 'threat' exists
//
function queenThreat(theBoard)
{
  // first step, find the queen locations and store in array
  // loop thru each space - 8x8 again
  queensPos=[];
  for (let y = 0; y < 8; y++) 
  {
    for (let x = 0; x < 8; x++) {
      if (theBoard[y][x] === 1) queensPos.push([y, x]);
    }
  }
  console.log('queens ('+queensPos.length+' found) are at: '+queensPos);  // DEBUG

  // determine threat logic:
  // queen one Y is queensPos[0][0] queen one X is queensPos[0][1]
  // queen two Y is queensPos[1][0] queen two X is queensPos[1][1]
  if (queensPos[0][0] === queensPos[1][0] || queensPos[0][1] === queensPos[1][1])   // check if on same X or Y axis (rows & cols)
  {
    return true;
  } 
  
  // this part took far longer than I want to admit to - plus required a "phone a (civil engineering) friend". 
  // slope formula --- rise/run  -- recall from grade 7ish.
  else if (Math.abs(queensPos[0][0] - queensPos[1][0]) === Math.abs(queensPos[0][1] - queensPos[1][1])) 
  {
    return true;
  } 
  else // doesn't appear to be a threat so return false
  {
    return false;
  }
}

