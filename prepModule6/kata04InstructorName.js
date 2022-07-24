const instructorWithLongestName = function(instructors) {
  // Error Checking
  if(!instructors || !instructors[0]){
    return "Error - Input Value Missing";
  }

  // Put your solution here
  let longest = 0;
  let instructor = "placeholder";

  // Error Checking x2
  for(let i = 0; i < instructors.length; i++) {
    tmpinstructor = instructors[i];

    if(!tmpinstructor["name"]){
      return "Error - Input Value \"Name\" Missing";
    };

    if(tmpinstructor["name"].length > longest){
      longest = tmpinstructor["name"].length;
      instructor = instructors[i];
    };
  };
  return instructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// Extra testing
console.log(instructorWithLongestName());
console.log(instructorWithLongestName([]));
console.log(instructorWithLongestName([
  {course: "Web"},
  {course: "iOS"},
  {course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {course: "Web"}
]));
