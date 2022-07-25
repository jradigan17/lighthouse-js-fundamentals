let food = {"pizza": 1, "pita": 2, "sandwich" : 3};
console.log(food);
let next = {};
next = Object.assign(next, food);
food = {"soup" : 8};
next = Object.assign(next, food);
food = {"soup" : 3};
next = Object.assign(next, food);
console.log(next);