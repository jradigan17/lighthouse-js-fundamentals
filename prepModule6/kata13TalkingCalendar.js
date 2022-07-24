const talkingCalendar = function(date) {
  // Your code here
  let split = date.split("/");
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = parseInt(split[2]);
  let dd = (day == 1 || day == 21 || day == 31) ? day + "st" : (day == 2 || day == 22) ? day + "nd" : (day == 3 || day == 23) ? day + "rd" : (day > 3 && day < 21) || (day > 23 && day < 31) ? day + "th" : 0;

  return month[split[1]-1] + " " + dd + ", "+ split[0];
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1990/05/03"));