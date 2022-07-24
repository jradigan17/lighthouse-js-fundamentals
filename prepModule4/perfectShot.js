const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function (moves){
  let parade = [0,0];
  for(const i of moves) {
    parade[0] = i === 'east' ? parade[0] += 1 : i === 'west' ? parade[0] -= 1 : parade[0];
    parade[1] = i === 'north' ? parade[1] += 1 : i === 'south' ? parade[1] -= 1 : parade[1];
  }
  return parade;
}

console.log(finalPosition(moves));