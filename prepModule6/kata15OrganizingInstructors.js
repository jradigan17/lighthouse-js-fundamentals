const organizeInstructors = function(instructors) {
  // Put your solution here
  let course = {};
  for(let item of instructors) {
    let tmp = item.course;
    if(!course[tmp]) {
      course[tmp] = [item.name];
    } else {
      course[tmp].push([item.name]);
    };
  };
  return course;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));