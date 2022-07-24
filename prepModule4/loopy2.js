let y = "";

const loopyLighthouse = function (range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    y = x % multiples[0] === 0 ? x % multiples[1] === 0 ? words[0]+words[1] : words[0] : x % multiples[1] === 0 ? words[1] : x;
    console.log(y);
  }
}

loopyLighthouse([1, 10], [2, 5], ["Batty", "Beacon"]);