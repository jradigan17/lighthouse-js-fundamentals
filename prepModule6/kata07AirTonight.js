const checkAir = function (samples, threshold) {
  // Error Checking
  if(!samples || !threshold) {
    return "Error - missing input data";
  };

  if(threshold < 0 || threshold > 1) {
    return "Error - incorrectly defined threshold";
  };

  // Code here!
  let tracker = 0;

  for(let i = 0; i < samples.length; i++) {
    if(samples[i] !== "dirty" && samples[i] !== "clean") {
      return "Error - incorrect sample data";
    };

    if(samples[i] === "dirty") {
      tracker += 1;
    };
  };

  if(tracker / samples.length > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  };

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean']
));

console.log(checkAir());

console.log(checkAir(
  ['clean', 'not clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  1.25
));