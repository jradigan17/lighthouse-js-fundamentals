// From EJ
// kata15-organizinginstructors.js
// 2022-07-08
// https://flex-web.compass.lighthouselabs.ca/activities/111
//


//
// return ojbect list in format: CourseName: [instructors]
//
const organizeInstructors = function(instructors) 
{
  const newList={};  // define a new empty  object for our return value

  // logic is loop thru input objects, create array of names for each course
  // return the assembled object
  for(const instructor of instructors)  // loop thru the passed object
  {
    let theName=instructor.name;  // grab each name and course from the object position we're in
    let theCourse=instructor.course;
    // console.log(theName); // debug

    if (newList[theCourse])  // if the course is already in our newList object, add their name to that array
    {
      newList[theCourse].push(theName);
    } 
    else // if course is not in there, adding a name under that course gets it in there
    {
      newList[theCourse] = [theName];
    }
  }
  return newList;
};

/*
expected output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/

console.log('\nINSTRUCTORS GROUP 1:');
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log('\nINSTRUCTORS GROUP 2:');
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));