const range = function(start, end, step){
  let numbers = [];
  if(start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return numbers;
  }

  for(let i = start; i <= end; i += step){
    numbers.push(i);
  }
  return numbers;
}

console.log(range(-5, 2, 3));