//
// kata13-talkingcalendar.js
// 2022.06.07
// https://flex-web.compass.lighthouselabs.ca/activities/109
//

//
// input as: YYYY/MM/DD
//
const talkingCalendar = function(date) 
{
  let theYear='';
  let theMonth='';
  let theDay='';
  let theDayth=''; // this will be our 'english' on the end of the day number

  // need to split string on forward slash
  let dateSections=date.split('/');
  // we could work with the array, but dumping array contents into separate VARS makes it easier to 'read'.
  theYear=dateSections[0]; // we could parseInt this, but really no need
  theMonth=parseInt(dateSections[1]); // convert these to Int type to strip leading 0's
  theDay=parseInt(dateSections[2]);  // 

  // MONTHS
  let monthsList=['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  // DAYS
  // figure out if st, nd, rd, th
  if(theDay === 1 || theDay === 21 || theDay === 31)
  {
    theDayth='st';
  }
  else if (theDay === 2 || theDay === 22)
  {
    theDayth='nd';
  }
  else if (theDay === 3 || theDay === 23)
  {
    theDayth='rd';
  }
  else
  {
    theDayth='th';
  }
  
  // BONUS - parse for fixed date special days like Christmas!
  let specialDay='';
  if(theDay===25 && theMonth===12)  // ideal would be to also parse year - and only show on current year
  {
    specialDay='🎅';
  }

  // expected output will be: December 2nd, 2017 (example)
  return(monthsList[theMonth-1]+' '+theDay+theDayth+', '+theYear+' '+specialDay); 
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// bonus special day check
console.log(talkingCalendar("1987/12/25"));

// checking 'rd' dates
console.log(talkingCalendar("1987/02/23"));