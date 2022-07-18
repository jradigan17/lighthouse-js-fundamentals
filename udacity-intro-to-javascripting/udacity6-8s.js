
// You can test your code with a smaller array first
// var test = [12, 29, 11, 3];

// Write your code here
test.forEach(function(item, index){
  if(item%3===0){
      // The commented statements below would not be able to change the value of item
      // because the `item` is a COPY of actual element, while actual is test[index]
      // item = item + 100;
      // console.log("The updated element is "+item+" and actual is "+test[index]);
      test[index]=test[index]+100;
  }
  //else 
  //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);