// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let volume = 4 / 3 * PI * Math.pow(radius, 3);
  return volume; 
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let volume = PI * height * Math.pow(radius, 2) / 3;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let volume = height * width * depth;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0;

  for(let i = 0; i < solids.length; i++) {
    let tmp = solids[i];
    let volume = 0;

    if(tmp.type === "sphere") {
      volume = sphereVolume(tmp.radius);
    };

    if(tmp.type === "cone") {
      volume = coneVolume(tmp.radius, tmp.height);
    };

    if(tmp.type === "prism") {
      volume = prismVolume(tmp.height, tmp.width, tmp.depth);
    };

    total += volume; 
  };
  
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);