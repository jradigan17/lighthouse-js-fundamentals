// Let i represents a sub-array
for(var i=0; i<numbers.length; i++){

  // Let j represents the length of a sub-array 
  for(var j=0; j<numbers[i].length; j++){
      if(numbers[i][j]%2===0)
          numbers[i][j]="even";
      else
          numbers[i][j]="odd";
  }
}

// Print the final array
console.log(numbers);