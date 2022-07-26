let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for(let i = 0; i < 8; i++) {
    let tmp = [];
    for(let j = 0; j < 8; j++) {
      if((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        tmp.push(1);
      } else {
      tmp.push(0);
      };
    };
    board.push(tmp);
  };
  return board;
};

function queenThreat(generatedBoard) {
  for(let i of generatedBoard) {
    let sum = 0;
    for(let j of i) {
      sum += j;
    };
    if(sum > 1) {
      return true;
    };
  };

  for(let i = 0; i < generatedBoard.length; i++) {
    let sum = 0;
    for(let j = 0; j < generatedBoard[i].length; j++){
        sum += generatedBoard[j][i];
    };
    if(sum > 1) {
      return true;
    };
  };

  let x = 0;
  let y = 0;
  for(let i = 0; i < generatedBoard.length; i++) {
    for(let j = 0; j < generatedBoard[i].length; j++) {
      if(generatedBoard[i][j] === 1){
        x += j;
        y += i;
      };
    };
  };

  if(x % y === 0) {
    return true;
  };  

  return false;
};

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));